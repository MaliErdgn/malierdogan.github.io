class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="navbar">
    <div class="main-menu" id="go-back">
    <img src="/photos/arrow.png" alt="">
    </div>
    <div class="main-menu" id="main-menu">
    <img src="/photos/home.png" alt="">
    </div>
    </div>
    `;
    const mainMenu = document.getElementById("main-menu");
    const goBack = document.getElementById("go-back");

    mainMenu.addEventListener("click", function() {
      window.location.href = "/index.html"
      return false;
    })

    goBack.addEventListener("click", function() {
        window.history.back();
    })
  }
}
customElements.define('navbar-main', Header);