// ハンバーガーメニュー

const burgerBtn = document.querySelector('.bl_burgerBtn');
const headNav = document.querySelector('.bl_head_gloNav');
const closeBtn = document.querySelector('.gnav_closeBtn');
const body = document.querySelector('body');

const toggleMenu = () => {
  burgerBtn.classList.toggle('active');
  headNav.classList.toggle('active');
}

const closeBtnActive = () => {
  const burgerBtnActive = burgerBtn.classList.contains("active");
  const headNavActive = burgerBtn.classList.contains("active");

  if (burgerBtnActive || headNavActive) {
    burgerBtn.classList.remove("active");
    headNav.classList.remove("active");
  }
}

burgerBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeBtnActive);
