const menu = document.querySelector('.btn-hamburger')
const menuContainer = document.querySelector('.menu')

menu.addEventListener('click', () => {
  menuContainer.classList.toggle('show')
})
