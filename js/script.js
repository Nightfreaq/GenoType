const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
  if(nav.classList.contains('show'))
    nav.classList.remove('show')
}
)

function rotate (){

const arrow = document.querySelector('.fa-arrow-down')

if(window.scrollY >= 300){
  arrow.style.rotate = '180deg'
  arrow.classList.remove('bounce-top')
} else {
  arrow.style.rotate = '0deg'
  arrow.classList.add('bounce-top')
}
}

window.addEventListener('scroll', rotate)