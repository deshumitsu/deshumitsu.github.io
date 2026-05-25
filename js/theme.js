const themeToggle = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;

const sunIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
`;

const moonIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a7 7 0 1 0 11 11Z"></path>
  </svg>
`;

function applyTheme(theme) {
  const isLight = theme === "light";
  root.dataset.theme = isLight ? "light" : "dark";

  if (!themeToggle) return;

  themeToggle.innerHTML = isLight ? moonIcon : sunIcon;
  themeToggle.setAttribute("aria-label", isLight ? "Включить тёмную тему" : "Включить светлую тему");
  themeToggle.title = isLight ? "Тёмная тема" : "Светлая тема";
}

const savedTheme = localStorage.getItem("upscale-lab-theme") || "dark";
applyTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("upscale-lab-theme", nextTheme);
  applyTheme(nextTheme);
});
