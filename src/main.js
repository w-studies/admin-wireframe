import './scss/style.scss'

const Body = document.querySelector('body')

const toggleSidebar = (className, e) => {
  e.preventDefault()
  Body.classList.toggle(className)
}

document.querySelector('a.hamburger').onclick = (e) => toggleSidebar('sidebar-show', e)
document.querySelector('a.sidebar-mini').onclick = (e) => toggleSidebar('sidebar-mini', e)
