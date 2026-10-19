// ==============================================
// 공통 헤더 (Web Component)
// 사용법 : <admin-header current="agreement" current-sub="agreement-list"></admin-header>
// current, current-sub 값과 같은 data-menu를 가진 링크에 aria-current="page" 표시
// ==============================================
class AdminHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="site-header__inner max-width">
        <a href="./main.html" class="site-header__logo">
          <span class="site-header__mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12c0-4 3-7 8-7 0 5-3 7-8 7z"/><path d="M12 14c0-3-2-5-7-5 0 4 2 5 7 5z"/></svg>
          </span>
          <span class="site-header__brand">
            <strong>Bank 은행</strong>
            <span>통합 관리자 센터</span>
          </span>
        </a>

        <nav class="gnb" aria-label="주요 메뉴">
          <ul class="gnb__menu">
            <li class="gnb__item">
              <a href="./list.html" class="gnb__link" data-menu="agreement">약정</a>
              <ul class="gnb__sub-menu">
                <li><a href="./list.html" class="gnb__sub-link" data-menu="agreement-list">조회</a></li>
              </ul>
            </li>
            <li class="gnb__item">
              <a href="#" class="gnb__link" data-menu="form">서식</a>
              <ul class="gnb__sub-menu">
                <li><a href="#" class="gnb__sub-link">서식관리</a></li>
                <li><span class="gnb__sub-link gnb__sub-link--disabled">서식의뢰<span class="a11y-hidden">(권한 없음)</span></span></li>
              </ul>
            </li>
            <li class="gnb__item">
              <a href="#" class="gnb__link" data-menu="stats">통계</a>
              <ul class="gnb__sub-menu">
                <li><a href="#" class="gnb__sub-link">단계별 오류발생</a></li>
                <li><a href="#" class="gnb__sub-link">분야별 이용통계</a></li>
                <li><a href="#" class="gnb__sub-link">부서별 서식의뢰</a></li>
              </ul>
            </li>
            <li class="gnb__item">
              <a href="#" class="gnb__link" data-menu="admin">관리</a>
              <ul class="gnb__sub-menu">
                <li><a href="#" class="gnb__sub-link">사용자권한</a></li>
                <li><a href="#" class="gnb__sub-link">라이선스/인증서</a></li>
                <li><a href="#" class="gnb__sub-link">관리자처리이력</a></li>
                <li><a href="#" class="gnb__sub-link">공통코드</a></li>
                <li><a href="#" class="gnb__sub-link">그룹코드</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="site-header__util">
          <p class="user-info"><strong>김관리</strong> · 운영관리팀</p>

          <div class="notice">
            <button type="button" class="notice-btn" aria-expanded="false" aria-controls="notice-panel">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span class="notice-btn__dot" aria-hidden="true"></span>
              <span class="a11y-hidden">알림, 읽지 않은 알림 2건</span>
            </button>

            <div class="notice__contents" id="notice-panel" hidden>
              <div class="notice__contents-header">
                <p class="notice__contents-title">알림</p>
                <button type="button" class="notice__check-all-btn">모두 확인</button>
              </div>
              <ul class="notice__list">
                <li class="notice__item notice__item--unread">
                  <a href="#" class="notice__link">
                    <span class="notice__item-title">[서식관리] 서식 검수 완료</span>
                    <span class="notice__item-content">요청하신 전자서식의 검수가 끝났어요. 서식관리에서 최종 서식을 확인해 주세요. 알림 내용은 최대 두 줄까지 보이고 나머지는 말줄임표로 처리돼요.</span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
                <li class="notice__item notice__item--unread">
                  <a href="#" class="notice__link">
                    <span class="notice__item-title">[약정] 처리 오류 발생</span>
                    <span class="notice__item-content">DATA 단계에서 오류가 발생한 약정이 있어요. 조회 화면에서 상태구분을 확인해 주세요.</span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
                <li class="notice__item notice__item--read">
                  <a href="#" class="notice__link">
                    <span class="notice__item-title">[공통] 정기 점검 안내</span>
                    <span class="notice__item-content">정기 점검 시간에는 일부 메뉴를 사용할 수 없어요.</span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#" class="header-btn">가이드</a>
          <a href="./login.html" class="header-btn">로그아웃</a>
        </div>
      </div>
    `;

    this.markCurrent();
    this.initNotice();
  }

  // 현재 메뉴 표시
  markCurrent() {
    ["current", "current-sub"].forEach((attr) => {
      const key = this.getAttribute(attr);
      if (!key) return;
      const link = this.querySelector(`[data-menu="${key}"]`);
      if (link) link.setAttribute("aria-current", "page");
    });
  }

  // 알림 패널 열기·닫기 : 버튼, 바깥 클릭, ESC
  initNotice() {
    const button = this.querySelector(".notice-btn");
    const panel = this.querySelector(".notice__contents");

    const setOpen = (isOpen) => {
      button.setAttribute("aria-expanded", String(isOpen));
      panel.hidden = !isOpen;
    };

    button.addEventListener("click", () => {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".notice")) setOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.hidden) {
        setOpen(false);
        button.focus();
      }
    });
  }
}

customElements.define("admin-header", AdminHeader);
