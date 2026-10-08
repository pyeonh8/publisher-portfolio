// ==============================================
// GNB 햄버거 메뉴
// ==============================================
const initGnb = () => {
  const toggle = document.querySelector(".gnb__toggle");
  const gnbList = document.querySelector(".gnb__list");
  const overlay = document.getElementById("gnb-overlay");
  if (!toggle) return;

  const open = () => {
    gnbList.classList.add("is-open");
    overlay.classList.add("is-active");

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "메뉴 닫기");
  };

  const close = () => {
    gnbList.classList.remove("is-open");
    overlay.classList.remove("is-active");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
  };

  toggle.addEventListener("click", () => {
    gnbList.classList.contains("is-open") ? close() : open();
  });

  gnbList.addEventListener("click", (e) => {
    if (e.target.closest(".gnb__item")) close();
  });

  overlay.addEventListener("click", close);

  // ESC 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
};

// ==============================================
// PC 슬라이더
// ==============================================
const initHeroSlider = () => {
  const bgs = document.querySelectorAll(".hero__bg-item");
  const slides = document.querySelectorAll(".hero__slide ");
  const imgs = document.querySelectorAll(".hero__img-item");
  const btns = document.querySelectorAll(".hero__control-btn");
  if (!bgs.length) return;

  // 초기화
  let bgCurrent = 0;
  let btnCurrent = 0;
  let timer;

  // 버튼 컨트롤 슬라이드
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      moveToSlide(i);
    });
  });

  const moveToSlide = (idx) => {
    [slides, imgs, btns].forEach((list) => {
      list.forEach((el, i) => {
        el.classList.toggle("is-active", i === idx);
      });
    });
    btns.forEach((btn, i) => btn.setAttribute("aria-selected", i === idx));
    btnCurrent = idx;
  };

  // 배경 자동 슬라이드
  const nextBg = () => {
    bgCurrent = (bgCurrent + 1) % bgs.length;
    bgs.forEach((el, i) => el.classList.toggle("is-active", i === bgCurrent));
  };

  const startAuto = () => {
    timer = setInterval(nextBg, 3500);
  };

  startAuto();
};

// ==============================================
// 모바일 슬라이더
// ==============================================
const initMobileSlider = () => {
  const slider = document.querySelector(".hero__mobile-track");
  const dots = document.querySelectorAll(".hero__mobile-dot");
  if (!slider) return;

  let current = 0;
  let startX = 0;
  let timer;

  const moveToSlide = (idx) => {
    slider.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === idx);
      dot.setAttribute("aria-selected", i === idx);
    });
    current = idx;
  };

  const next = () => moveToSlide((current + 1) % dots.length);
  const startAuto = () => (timer = setInterval(next, 3000));
  const stopAuto = () => clearInterval(timer);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopAuto();
      moveToSlide(i);
      startAuto();
    });
  });

  startAuto();
};

// ==============================================
// TOP 버튼
// ==============================================
const initTopBtn = () => {
  const btn = document.getElementById("top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 200;
    btn.style.opacity = show ? "1" : "0";
    btn.style.visibility = show ? "visible" : "hidden";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

// ==============================================
// HTML 로드 후 스크립트 실행
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
  initGnb();
  initHeroSlider();
  initMobileSlider();
  initTopBtn();
});
