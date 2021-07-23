const menu = document.querySelector('.btn-hamburger')
const menuContainer = document.querySelector('.menu')

menu.addEventListener('click', () => {
  menuContainer.classList.toggle('show')
})

// scrollReveal
const scrollReveal = ScrollReveal({
  reset: true,
  distance: '70px',
  duration: 1000,
  origin: 'bottom'
})

scrollReveal.reveal(
  `.menu-container,
.header-text,
.egg-image,
.text1,
.taca-image,
.depoimento-container,
.leite-image,
.laranja-image-mosaico,
.sorvete-image,
.acucar-img,
#mosaico,
.attribution`,

  { interval: 100 }
)
