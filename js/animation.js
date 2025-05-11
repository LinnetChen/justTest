gsap.registerPlugin(ScrollTrigger);

// 初始化元素狀態
[
  { target: ".secTitle", props: { scale: 0.5 } },
  { target: ".section_1_box", props: { yPercent: 0 } },
  { target: ".banner", props: { yPercent: 10 } },
  { target: ".secTextUiux", props: { yPercent: -5 } },
].forEach(({ target, props }) => gsap.set(target, props));

// 首頁標題動畫（進場就觸發）
gsap.to(".mainTitle1", {
  xPercent: 200,
  scale: 5,
  opacity: 0,
  ease: "none",
  scrollTrigger: { scrub: 1 },
});

// 滾動動畫統一配置
const scrollAnimations = [
  { selector: ".secTitle",    animation: { yPercent: 5, scale: 1.2 } },
  { selector: ".section_1_box",  animation: { yPercent: 10, scale: 1 } },
  { selector: ".banner",      animation: { yPercent: -10, scale: 1 } },
  { selector: ".secTextUiux", animation: { yPercent: 25, scale: 1 } },
];

// 套用每組滾動動畫
scrollAnimations.forEach(({ selector, animation }) => {
  document.querySelectorAll(selector).forEach((el) => {
    gsap.to(el, {
      ...animation,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: 1,
      },
    });
  });
});
