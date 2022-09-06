const burgerBtn = document.querySelector('.header__burger')
const menu = document.querySelector('.nav')
const links = document.querySelectorAll('.nav__link')

const menuToggle = () => {
  burgerBtn.classList.toggle('active')
  menu.classList.toggle('active')
}

const menuClose = () => {
  burgerBtn.classList.remove('active')
  menu.classList.remove('active')
}

burgerBtn.addEventListener('click', menuToggle)

for (const link of links) {
  link.addEventListener('click', menuClose)
}
