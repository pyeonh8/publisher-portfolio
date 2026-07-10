// ==============================================
// GNB 메뉴
// ==============================================
const initGnb = () => {
  const gnb = document.querySelector(".gnb");
  if (!gnb) return;

  gnb.addEventListener("mouseenter", () => gnb.classList.add("is-open"));
  gnb.addEventListener("mouseleave", () => gnb.classList.remove("is-open"));
};

// ==============================================
// 메인보드 아코디언 높이 동기화
// ==============================================
const syncHeight = () => {
  const sourceElement = document.querySelector(".dashboard__cards");
  const targetElement = document.querySelector(".accordion");

  if (sourceElement && targetElement) {
    const height = sourceElement.offsetHeight;
    targetElement.style.height = `${height - 47}px`;
  }
};

// ==============================================
// 아코디언 열기/닫기
// ==============================================
const initAccordion = () => {
  document.querySelectorAll(".accordion__header").forEach((header) => {
    const content = document.getElementById(header.getAttribute("aria-controls"));

    // 초기, 열려있는 아코디언 높이 값 세팅
    if (header.getAttribute("aria-expanded") === "true") {
      content.style.height = content.scrollHeight + "px";
    }

    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      header.setAttribute("aria-expanded", !isExpanded);

      if (isExpanded) {
        content.style.height = "0";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
};

// ==============================================
// 로그인 - 인증방식 라디오 버튼
// ==============================================
const initLoginRadio = () => {
  const passwordInput = document.getElementById("password");
  const radioButtons = document.querySelectorAll('input[name="login__radio-btn"]');

  if (!passwordInput || !radioButtons.length) return;

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      // OTP 선택 시 인증번호 입력 활성화, FIDO 선택 시 비활성화
      if (radio.value === "otp") {
        passwordInput.disabled = false;
        passwordInput.focus();
      } else {
        passwordInput.disabled = true;
        passwordInput.value = "";
      }
    });
  });
};

// ==============================================
// 툴팁 (Hover & Focus)
// ==============================================
const initTooltip = () => {
  // 동적 툴팁 값을 담을 공통 div를 생성
  let globalTooltipLayer = document.getElementById("tooltip-layer");

  if (!globalTooltipLayer) {
    globalTooltipLayer = document.createElement("div");
    globalTooltipLayer.id = "tooltip-layer";
    globalTooltipLayer.className = "tooltip__desc";
    globalTooltipLayer.setAttribute("role", "tooltip");
    globalTooltipLayer.hidden = true;
    document.body.appendChild(globalTooltipLayer);
  }

  // --------------------------------------------
  // 동적 툴팁 제어
  // --------------------------------------------
  const dynamicTriggers = document.querySelectorAll(".tooltip__trigger--dynamic");

  const showDynamicTooltip = (trigger) => {
    const text = trigger.getAttribute("data-tooltip");
    if (!text) return;

    globalTooltipLayer.textContent = text;
    globalTooltipLayer.hidden = false;

    // 위치 계산
    const rect = trigger.getBoundingClientRect();
    globalTooltipLayer.style.position = "absolute";
    globalTooltipLayer.style.top = `${rect.bottom + window.scrollY}px`;
    globalTooltipLayer.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    globalTooltipLayer.style.zIndex = "99";

    trigger.setAttribute("aria-describedby", globalTooltipLayer.id);
  };

  const hideDynamicTooltip = (trigger) => {
    globalTooltipLayer.hidden = true;
    trigger.removeAttribute("aria-describedby");
  };

  // --------------------------------------------
  // 정적 HTML 툴팁 제어
  // --------------------------------------------
  const staticTriggers = document.querySelectorAll(".tooltip__trigger--static");

  const showStaticTooltip = (trigger) => {
    const descId = trigger.getAttribute("aria-describedby");
    const desc = document.getElementById(descId);
    if (desc) desc.hidden = false;
  };

  const hideStaticTooltip = (trigger) => {
    const descId = trigger.getAttribute("aria-describedby");
    const desc = document.getElementById(descId);
    if (desc) desc.hidden = true;
  };

  // --------------------------------------------
  // 통합 툴팁 이벤트 제어
  // --------------------------------------------
  const bindTooltipEvents = (triggers, showFn, hideFn) => {
    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", () => showFn(trigger));
      trigger.addEventListener("mouseleave", () => hideFn(trigger));
      trigger.addEventListener("focus", () => showFn(trigger));
      trigger.addEventListener("blur", () => hideFn(trigger));
    });
  };

  bindTooltipEvents(dynamicTriggers, showDynamicTooltip, hideDynamicTooltip);
  bindTooltipEvents(staticTriggers, showStaticTooltip, hideStaticTooltip);
};

// ==============================================
// 첨부파일 삭제 & 추가
// ==============================================
const initAttachFile = () => {
  const attachFileList = document.querySelector(".attach-file__list");
  if (!attachFileList) return;

  // --------------------------------------------
  // 첨부파일 삭제
  // --------------------------------------------
  const attachFileDelete = attachFileList.querySelectorAll(".file__delete");

  attachFileList.addEventListener("click", (e) => {
    if (e.target.closest(".file__delete")) {
      e.target.closest(".attach-file__item").remove();
      checkEmpty();
    }
  });

  // --------------------------------------------
  // 첨부파일 추가
  // --------------------------------------------
  const newAttachFile = attachFileList.querySelector(".attach-file__item--new");

  newAttachFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 첨부파일 생성
    const newItem = document.createElement("li");
    newItem.className = "attach-file__item attach-file__item--selected";
    newItem.innerHTML = `
      <span class="file__name">${file.name}</span>
      <button type="button" class="file__delete" aria-label="${file.name} 파일 삭제">
        <img src="../img/close_file.png" alt="" aria-hidden="true" />
      </button>
    `;

    attachFileList.insertBefore(newItem, newAttachFile.closest(".attach-file__item--new"));

    e.target.value = "";

    checkEmpty();
  });

  // --------------------------------------------
  // 첨부파일 유무 안내
  // --------------------------------------------
  const checkEmpty = () => {
    const selectedItem = attachFileList.querySelectorAll(".attach-file__item--selected");
    const emptyMsg = attachFileList.querySelector(".file__name--empty");

    if (selectedItem.length === 0) {
      emptyMsg.style.display = "block";
    } else {
      emptyMsg.style.display = "none";
    }
  };
};

// ==============================================
// 초기화
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
  initGnb();
  initAccordion();
  initLoginRadio();
  initTooltip();
  initAttachFile();
});

window.addEventListener("load", syncHeight);
