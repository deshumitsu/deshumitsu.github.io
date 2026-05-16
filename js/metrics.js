const resultMetrics = [
  { categoryId: "illustration", toolId: "aiarty", psnr: "32,727", ssim: "0,9054", lpips: "0,1241" },
  { categoryId: "illustration", toolId: "on1", psnr: "29,077", ssim: "0,8424", lpips: "0,1882" },
  { categoryId: "illustration", toolId: "topaz", psnr: "31,899", ssim: "0,8778", lpips: "0,1468" },
  { categoryId: "illustration", toolId: "upscayl", psnr: "29,511", ssim: "0,8453", lpips: "0,1838" },
  { categoryId: "illustration", toolId: "waifu2x", psnr: "35,209", ssim: "0,9222", lpips: "0,0581" },
  { categoryId: "text", toolId: "aiarty", psnr: "26,632", ssim: "0,9576", lpips: "0,0276" },
  { categoryId: "text", toolId: "on1", psnr: "25,396", ssim: "0,9440", lpips: "0,0348" },
  { categoryId: "text", toolId: "topaz", psnr: "27,986", ssim: "0,9686", lpips: "0,0231" },
  { categoryId: "text", toolId: "upscayl", psnr: "28,768", ssim: "0,9658", lpips: "0,0235" },
  { categoryId: "text", toolId: "waifu2x", psnr: "28,895", ssim: "0,9609", lpips: "0,0217" },
  { categoryId: "portrait", toolId: "aiarty", psnr: "32,299", ssim: "0,9020", lpips: "0,1510" },
  { categoryId: "portrait", toolId: "on1", psnr: "29,192", ssim: "0,8499", lpips: "0,2067" },
  { categoryId: "portrait", toolId: "topaz", psnr: "32,061", ssim: "0,8719", lpips: "0,1453" },
  { categoryId: "portrait", toolId: "upscayl", psnr: "32,496", ssim: "0,8947", lpips: "0,1094" },
  { categoryId: "portrait", toolId: "waifu2x", psnr: "33,044", ssim: "0,8904", lpips: "0,1293" },
  { categoryId: "screens", toolId: "aiarty", psnr: "26,793", ssim: "0,8546", lpips: "0,1363" },
  { categoryId: "screens", toolId: "on1", psnr: "25,108", ssim: "0,7897", lpips: "0,1875" },
  { categoryId: "screens", toolId: "topaz", psnr: "26,887", ssim: "0,8022", lpips: "0,1758" },
  { categoryId: "screens", toolId: "upscayl", psnr: "28,572", ssim: "0,8771", lpips: "0,1053" },
  { categoryId: "screens", toolId: "waifu2x", psnr: "28,034", ssim: "0,8569", lpips: "0,1383" },
  { categoryId: "photo", toolId: "aiarty", psnr: "22,527", ssim: "0,6796", lpips: "0,2422" },
  { categoryId: "photo", toolId: "on1", psnr: "21,098", ssim: "0,5402", lpips: "0,2883" },
  { categoryId: "photo", toolId: "topaz", psnr: "22,937", ssim: "0,6547", lpips: "0,2496" },
  { categoryId: "photo", toolId: "upscayl", psnr: "23,028", ssim: "0,7065", lpips: "0,2131" },
  { categoryId: "photo", toolId: "waifu2x", psnr: "23,472", ssim: "0,6884", lpips: "0,2353" }
];

function getResultMetric(categoryId, toolId) {
  return resultMetrics.find(metric => metric.categoryId === categoryId && metric.toolId === toolId);
}
