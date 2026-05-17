const imageBrowser = document.getElementById("imageBrowser");
const toolBrowser = document.getElementById("toolBrowser");
const leftToolBrowser = document.getElementById("leftToolBrowser");
const leftToolPicker = document.getElementById("leftToolPicker");
const leftSidePicker = document.getElementById("leftSidePicker");

const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");
const leftLabel = document.getElementById("leftLabel");
const rightLabel = document.getElementById("rightLabel");
const metricsText = document.getElementById("metricsText");

const imageCompare = document.getElementById("imageCompare");
const zoomRange = document.getElementById("zoomRange");
const resetCompare = document.getElementById("resetCompare");
const overviewGrid = document.getElementById("overviewGrid");

let dragMode = null;
let panTarget = null;
let activePointerTarget = null;
let activePointerId = null;
let sliderPosition = 50;
let zoomValue = 1;
let panX = 0;
let panY = 0;
let dragStartX = 0;
let dragStartY = 0;
let dragStartPanX = 0;
let dragStartPanY = 0;
let currentCategoryId = categories[0].id;
let currentImageId = categories[0].images[0].id;
let currentToolId = tools[0].id;
let currentLeftToolId = tools[0].id;
let currentLeftType = "low";

const toolLogos = {
  upscayl: "images/logos/upscayl.png",
  topaz: "images/logos/topaz.png",
  on1: "images/logos/on1.png",
  waifu2x: "images/logos/waifu2x.png",
  aiarty: "images/logos/aiarty.png"
};

function init() {
  renderImageBrowser();
  renderToolBrowser(toolBrowser, "right");
  renderToolBrowser(leftToolBrowser, "left");
  updateComparison();

  leftSidePicker.addEventListener("click", selectLeftType);
  zoomRange.addEventListener("input", () => setZoom(zoomRange.value));
  resetCompare.addEventListener("click", resetComparisonView);

  imageCompare.addEventListener("pointerdown", startDrag);
  imageCompare.addEventListener("wheel", zoomWithWheel, { passive: false });
  overviewGrid.addEventListener("pointerdown", startOverviewPan);
  overviewGrid.addEventListener("wheel", zoomWithWheel, { passive: false });
  window.addEventListener("pointermove", drag);
  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("pointercancel", stopDrag);
}

function renderImageBrowser() {
  imageBrowser.innerHTML = "";

  categories.forEach(category => {
    const group = document.createElement("section");
    group.className = "image-group";

    const title = document.createElement("h3");
    title.textContent = category.name;
    group.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "image-thumb-grid";

    category.images.forEach(image => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "image-thumb";
      button.dataset.categoryId = category.id;
      button.dataset.imageId = image.id;

      const thumb = document.createElement("img");
      thumb.src = image.low;
      thumb.alt = image.name;

      button.appendChild(thumb);
      button.addEventListener("click", () => selectImage(category.id, image.id));
      grid.appendChild(button);
    });

    group.appendChild(grid);
    imageBrowser.appendChild(group);
  });

  updateActiveThumbnail();
}

function renderToolBrowser(container, side) {
  container.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = "Инструмент обработки";
  container.appendChild(title);

  const list = document.createElement("div");
  list.className = "tool-choice-list";

  tools.forEach(tool => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tool-choice";
    button.dataset.toolId = tool.id;
    button.dataset.side = side;

    const logo = document.createElement("img");
    logo.src = toolLogos[tool.id];
    logo.alt = "";

    const label = document.createElement("span");
    label.textContent = tool.name;

    button.appendChild(logo);
    button.appendChild(label);
    button.addEventListener("click", () => selectTool(tool.id, side));
    list.appendChild(button);
  });

  container.appendChild(list);
  updateActiveTool(side);
}

function selectImage(categoryId, imageId) {
  currentCategoryId = categoryId;
  currentImageId = imageId;
  updateActiveThumbnail();
  updateComparison();
}

function selectTool(toolId, side) {
  if (side === "left") {
    currentLeftToolId = toolId;
  } else {
    currentToolId = toolId;
  }

  updateActiveTool(side);
  updateComparison();
}

function selectLeftType(event) {
  const button = event.target.closest(".left-choice");
  if (!button) return;

  currentLeftType = button.dataset.leftType;
  updateActiveLeftType();
  updateComparison();
}

function updateActiveThumbnail() {
  document.querySelectorAll(".image-thumb").forEach(button => {
    const isActive =
      button.dataset.categoryId === currentCategoryId &&
      button.dataset.imageId === currentImageId;

    button.classList.toggle("active", isActive);
  });
}

function updateActiveTool(side) {
  const selectedToolId = side === "left" ? currentLeftToolId : currentToolId;

  document.querySelectorAll(`.tool-choice[data-side="${side}"]`).forEach(button => {
    button.classList.toggle("active", button.dataset.toolId === selectedToolId);
  });
}

function updateActiveLeftType() {
  document.querySelectorAll(".left-choice").forEach(button => {
    button.classList.toggle("active", button.dataset.leftType === currentLeftType);
  });
}

function getCurrentCategory() {
  return categories.find(category => category.id === currentCategoryId) || categories[0];
}

function getCurrentImage() {
  const category = getCurrentCategory();
  return category.images.find(image => image.id === currentImageId) || category.images[0];
}

function getCurrentTool() {
  return tools.find(tool => tool.id === currentToolId) || tools[0];
}

function getCurrentLeftTool() {
  return tools.find(tool => tool.id === currentLeftToolId) || tools[0];
}

function updateComparison() {
  const category = getCurrentCategory();
  const image = getCurrentImage();
  const tool = getCurrentTool();
  const leftTool = getCurrentLeftTool();
  const leftType = currentLeftType;

  leftImage.src = getLeftSource(image, leftType, leftTool.id);
  rightImage.src = image.results[tool.id];

  leftLabel.textContent = getResponsiveLeftLabel(leftType, leftTool.name);
  rightLabel.textContent = getResponsiveRightLabel(tool.name);
  updateLeftToolVisibility(leftType);
  renderOverview(image);

  const metric = getResultMetric(category.id, tool.id);

  if (metric) {
    metricsText.textContent = `PSNR: ${metric.psnr}\nSSIM: ${metric.ssim}\nLPIPS: ${metric.lpips}`;
  } else {
    metricsText.textContent = "Для выбранной категории и инструмента показатели не указаны в таблице результатов.";
  }

  setSliderPosition(50);
}

function getLeftSource(image, leftType, toolId) {
  if (leftType === "original") return image.original;
  if (leftType === "tool") return image.results[toolId];
  return image.low;
}

function getLeftLabel(leftType, toolName) {
  if (leftType === "original") return "Эталонное изображение";
  if (leftType === "tool") return toolName;
  return "Уменьшенная версия";
}

function isCompactViewport() {
  return window.matchMedia("(max-width: 560px)").matches;
}

function getResponsiveLeftLabel(leftType, toolName) {
  return getLeftLabel(leftType, toolName);
}

function getResponsiveRightLabel(toolName) {
  return toolName;
}

function updateLeftToolVisibility(leftType) {
  const showTools = leftType === "tool";
  leftToolPicker.hidden = !showTools;
}

function setZoom(value) {
  zoomValue = Number(value);
  applyViewport();
  setPanPosition(panX, panY);
}

function zoomWithWheel(event) {
  if (event.currentTarget === overviewGrid && !event.target.closest(".overview-image")) {
    return;
  }

  event.preventDefault();

  const direction = event.deltaY < 0 ? 1 : -1;
  const nextZoom = Math.max(1, Math.min(10, zoomValue + direction * 0.2));
  const roundedZoom = Math.round(nextZoom * 10) / 10;

  zoomRange.value = String(roundedZoom);
  setZoom(roundedZoom);
}

function resetComparisonView() {
  currentLeftType = "low";
  updateActiveLeftType();
  zoomRange.value = "1";
  setZoom(1);
  setPanPosition(0, 0);
  updateComparison();
  setSliderPosition(50);
}

function startDrag(event) {
  if (event.button !== 0) return;

  dragMode = isNearSlider(event) ? "slider" : "pan";
  panTarget = imageCompare;

  if (imageCompare.setPointerCapture && event.pointerId !== undefined) {
    imageCompare.setPointerCapture(event.pointerId);
    activePointerTarget = imageCompare;
    activePointerId = event.pointerId;
  }

  if (dragMode === "slider") {
    imageCompare.classList.add("is-sliding");
    moveHandle(event);
    return;
  }

  imageCompare.classList.add("is-panning");
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartPanX = panX;
  dragStartPanY = panY;
}

function drag(event) {
  if (!dragMode) return;

  if (dragMode === "slider") {
    moveHandle(event);
    return;
  }

  movePan(event);
}

function stopDrag(event) {
  dragMode = null;
  panTarget = null;
  imageCompare.classList.remove("is-sliding", "is-panning");
  document.querySelectorAll(".overview-image.is-panning").forEach(card => {
    card.classList.remove("is-panning");
  });

  if (
    event &&
    activePointerTarget &&
    activePointerTarget.hasPointerCapture &&
    activePointerId !== null &&
    activePointerTarget.hasPointerCapture(activePointerId)
  ) {
    activePointerTarget.releasePointerCapture(activePointerId);
  }

  activePointerTarget = null;
  activePointerId = null;
}

function moveHandle(event) {
  const rect = imageCompare.getBoundingClientRect();
  const clientX = event.clientX;
  const position = ((clientX - rect.left) / rect.width) * 100;
  const clampedPosition = Math.max(0, Math.min(100, position));

  setSliderPosition(clampedPosition);
}

function setSliderPosition(percent) {
  sliderPosition = percent;
  imageCompare.style.setProperty("--slider-position", `${percent}%`);
}

function renderOverview(image) {
  const overviewItems = [
    {
      title: "Эталонное изображение",
      src: image.original
    },
    {
      title: "Уменьшенная версия",
      src: image.low
    },
    ...tools.map(tool => ({
      title: tool.name,
      src: image.results[tool.id]
    }))
  ];

  overviewGrid.innerHTML = "";

  overviewItems.forEach(item => {
    const card = document.createElement("article");
    card.className = "overview-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const imageBox = document.createElement("div");
    imageBox.className = "overview-image";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;

    imageBox.appendChild(img);
    card.appendChild(title);
    card.appendChild(imageBox);
    overviewGrid.appendChild(card);
  });

  applyViewport();
}

function startOverviewPan(event) {
  if (event.button !== 0) return;

  const target = event.target.closest(".overview-image");
  if (!target) return;

  dragMode = "pan";
  panTarget = target;
  target.classList.add("is-panning");

  if (target.setPointerCapture && event.pointerId !== undefined) {
    target.setPointerCapture(event.pointerId);
    activePointerTarget = target;
    activePointerId = event.pointerId;
  }

  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartPanX = panX;
  dragStartPanY = panY;
}

function isNearSlider(event) {
  const rect = imageCompare.getBoundingClientRect();
  const sliderX = rect.left + (rect.width * sliderPosition) / 100;
  return Math.abs(event.clientX - sliderX) <= 40;
}

function movePan(event) {
  if (zoomValue <= 1) {
    setPanPosition(0, 0);
    return;
  }

  const deltaX = event.clientX - dragStartX;
  const deltaY = event.clientY - dragStartY;
  setPanPosition(dragStartPanX + deltaX, dragStartPanY + deltaY);
}

function setPanPosition(x, y) {
  const rect = (panTarget || imageCompare).getBoundingClientRect();
  const maxX = Math.max(0, (rect.width * zoomValue - rect.width) / 2);
  const maxY = Math.max(0, (rect.height * zoomValue - rect.height) / 2);

  panX = Math.max(-maxX, Math.min(maxX, x));
  panY = Math.max(-maxY, Math.min(maxY, y));

  applyViewport();
}

function applyViewport() {
  imageCompare.style.setProperty("--pan-x", `${panX}px`);
  imageCompare.style.setProperty("--pan-y", `${panY}px`);
  imageCompare.style.setProperty("--compare-zoom", zoomValue);

  overviewGrid.style.setProperty("--pan-x", `${panX}px`);
  overviewGrid.style.setProperty("--pan-y", `${panY}px`);
  overviewGrid.style.setProperty("--compare-zoom", zoomValue);
}

document.addEventListener("DOMContentLoaded", init);
