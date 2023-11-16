import './scss/style.scss'

const Body = document.querySelector('body')

const toggleSidebar = (className, e) => {
  e.preventDefault()
  Body.classList.toggle(className)
}

const toggleSidebarItem = (e) => {
  e.preventDefault()
  sidebarLinks.forEach((el) => el !== e.target && el.classList.remove('active'))
  e.target.classList.toggle('active')
}

document.querySelector('a.hamburger').onclick = (e) => toggleSidebar('sidebar-show', e)
document.querySelector('a.sidebar-mini').onclick = (e) => toggleSidebar('sidebar-mini', e)

const sidebarLinks = document.querySelectorAll('aside nav a')
sidebarLinks.forEach((el) => el.addEventListener('click', toggleSidebarItem))
