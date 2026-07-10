class AdminHeaderBottom extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <div class="header-bottom">
        <div class="header-bottom__inner max-width">
          <h1 class="logo_nav">
            <a href="#"><img src="../img/logo_nav.png" alt="Bank 은행 통합 관리자 센터" /></a>
          </h1>
          <nav class="gnb">
            <ul class="gnb__menu">
              <li class="active">
                <a href="#">약정</a>
                <ul class="gnb__sub-menu">
                  <li class="focus"><a href="#">조회</a></li>
                </ul>
              </li>
              <li>
                <a href="#">서식</a>
                <ul class="gnb__sub-menu">
                  <li><a href="#">서식관리</a></li>
                  <li class="disabled"><a href="#">서식의뢰</a></li>
                </ul>
              </li>
              <li>
                <a href="#">통계</a>
                <ul class="gnb__sub-menu">
                  <li><a href="#">단계별 오류발생</a></li>
                  <li><a href="#">분야별 이용통계</a></li>
                  <li><a href="#">부서별 서식의뢰</a></li>
                </ul>
              </li>
              <li>
                <a href="#">관리</a>
                <ul class="gnb__sub-menu">
                  <li><a href="#">사용자권한</a></li>
                  <li><a href="#">라이선스/인증서</a></li>
                  <li><a href="#">관리자처리이력</a></li>
                  <li><a href="#">공통코드</a></li>
                  <li><a href="#">그룹코드</a></li>
                </ul>
              </li>
            </ul>
            <div class="gnb__bg"></div>
          </nav>
        </div>
      </div>
    `;
  }
}

customElements.define('admin-header-bottom',AdminHeaderBottom);