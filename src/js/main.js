

const burgerBtn = document.querySelector('.burgerBtn')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')
const footerYear = document.querySelector('.footer__year')
const closeButton = document.querySelector('.menu__closeButton')





  
  
  
  
///end of scroll spy

const btn = () => {
	menu.classList.toggle('active')

	menuLinks.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('active')
		})
	})
}
const closeMenu = () => {
	menu.classList.remove('active')
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
burgerBtn.addEventListener('click', btn)
menu.addEventListener('click', closeMenu)
closeButton.addEventListener('click', closeMenu)
