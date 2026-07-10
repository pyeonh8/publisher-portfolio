class AdminHeaderTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header-top">
        <div class="header-top__inner max-width">
          <p class="user-info">
            <b>한기획(여신기획부)</b>
            님이 로그인 중입니다. (최근 로그인 : 2022-09-01 09:08:51)
          </p>
          <div class="notice">
            <button type="button" class="notice-btn"
              onclick="document.getElementsByClassName('notice__contents')[0].classList.toggle('active')">
              <img src="../img/notice.png" alt="알림">
            </button>
            <div class="notice__contents" role="dialog">
              <div class="notice__contents-header">
                <button type="button" class="notice__check-all-btn">모두확인</button>
              </div>
              <ul class="notice__list">
                <li class="notice__item notice__item--unread">
                  <a href="#" class="notice__link">
                    <span class="notice__item-title">[ 메뉴명 ] 알림타이틀</span>
                    <span class="notice__item-content">
                      알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고 알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고 알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고 알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고
                    </span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
                <li class="notice__item notice__item--unread">
                  <a href="#" class="notice__link">
                    <span class="notice__item-title">[ 메뉴명 ] 알림타이틀</span>
                    <span class="notice__item-content">
                      알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고 알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고
                    </span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
                <li class="notice__item notice__item--read">
                  <a href="#">
                    <span class="notice__item-title">[ 메뉴명 ] 알림타이틀</span>
                    <span class="notice__item-content">
                      알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고 알림내용이 최대 두줄로 나오고, 나머지는 말줄임표로 처리되도록 해주시면 깔끔하고
                    </span>
                    <span class="notice__item-date">2022-01-01 16:42</span>
                  </a>
                </li>
                <li class="notice__item notice__item--empty">모든 알림을 확인하셨습니다.</li>
              </ul>
            </div>
          </div>
          <div class="header__btn-group">
            <button class="header-btn header-btn--logout">로그아웃</button>
            <button class="header-btn header-btn--guide">가이드</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("admin-header-top", AdminHeaderTop);
