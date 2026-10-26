import { initSiteViewer } from "./site-viewer.js";

// 키워드 복사 ====================================

const keywordsCopy = () => {
  const section = document.querySelector(".keywords");
  const keywords = document.querySelectorAll(".keywords__row");
  const windowWidth = window.innerWidth;

  keywords.forEach((keyword) => {
    let keywordWidth = keyword.getBoundingClientRect().width;
    const items = keyword.querySelectorAll("li");

    while (keywordWidth < windowWidth) {
      items.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        keyword.appendChild(clonedItem).setAttribute("aria-hidden", true);

        keywordWidth = keyword.scrollWidth;
      });
    }

    const clonedKeyword = keyword.cloneNode(true);
    keyword.parentElement.appendChild(clonedKeyword).setAttribute("aria-hidden", true);
  });

  // 애니메이션 실행
  section.setAttribute("data-ready", "true");
};

// 키워드 일시정지 ====================================

const keywordPaused = () => {
  const section = document.querySelector(".keywords");
  const keywordsBtn = document.querySelector(".keywords__btn");

  keywordsBtn.addEventListener("click", function () {
    const btnBoolean = keywordsBtn.getAttribute("aria-pressed");
    const boolVal = btnBoolean === "true";

    section.setAttribute("data-paused", !boolVal);
    keywordsBtn.setAttribute("aria-pressed", !boolVal);
  });
};

keywordsCopy();
keywordPaused();
initSiteViewer();

// 2단계: GSAP 모션 (직접 작성)
// - 키워드 띠 흐르기 (hover·포커스 시 멈춤, prefers-reduced-motion이면 정지)
// - 섹션 등장 모션
