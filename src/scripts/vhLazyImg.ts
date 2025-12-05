// 图片懒加载
import LazyLoad from "vanilla-lazyload";

// 初始化图片懒加载
let lazyLoadStatus: any = null;
export default () => {
  document.querySelectorAll(".main-inner>.main-inner-content img:not(.view-image-container)").forEach((i: any) => {
    // 是否包含data-src
    if (!i.hasAttribute("data-src")) {
      i.setAttribute("data-src", i.getAttribute("src"));
      i.setAttribute("src", '/assets/images/lazy-loading.webp');
    }
  });
  if (lazyLoadStatus) return lazyLoadStatus.update();
  lazyLoadStatus = new LazyLoad({ elements_selector: "img:not(.view-image-container)", threshold: 0, data_src: "vh-lz-src" });
}