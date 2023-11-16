import './scss/style.scss'

const Body = document.querySelector('body')

document.querySelector('a.hamburger').onclick = (e) => {
  e.preventDefault()

  Body.classList.toggle('sidebar-show')
}

document.querySelector('a.sidebar-mini').onclick = (e) => {
  e.preventDefault()

  Body.classList.toggle('sidebar-mini')
}
