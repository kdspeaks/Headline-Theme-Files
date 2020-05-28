class SideMenu {
	constructor() {
		this.injectHTML()
		this.menuIconWrapper = document.querySelector('.site-header__menu-icon-wrapper')
		this.isMenuOpen = false
		this.menuIcon = document.querySelector('.site-header__menu-icon')
		this.menuContainer = document.querySelector('.side-menu')
		this.afterHeader = document.querySelector('.after-header')
		this.siteHeader = document.querySelector('.site-header')
		this.siteHeaderLogo = document.querySelector('.site-header__logo')
		this.siteHeaderMenu = document.querySelector('.site-header__menu-item')
		this.siteHeaderSearch = document.querySelectorAll('.site-header__search')
		this.events()
	}
	events() {
		this.menuIconWrapper.addEventListener('click', ()=> this.toggleTheMenu())
		document.addEventListener("keyup", e => this.keyPressHandler(e))
	}
	injectHTML() {
		document.body.insertAdjacentHTML('beforeend', `
				<!-- Side Menu Starts -->
				<div class="side-menu">
				    <div class="side-menu__container">
				        <nav class="side-menu__list">
				            <ul>
				                <li><a href="#">Menu 1</a></li>
				                <li><a href="#">Menu 2</a></li>
				                <li><a href="#">Menu 3</a></li>
				                <li><a href="#">Menu 4</a></li>
				                <li><a href="#">Menu 5</a></li>
				            </ul>
				        </nav>
				        <div class="side-menu__social">
				            <ul>
				                <li><a href="#"><i class="ha-facebook-square" aria-hidden="true"></i></a></li>
				                <li><a href="#"><i class="ha-twitter" aria-hidden="true"></i></a></li>
				                <li><a href="#"><i class="ha-youtube-play" aria-hidden="true"></i></a></li>
				                <li><a href="#"><i class="ha-instagram" aria-hidden="true"></i></a></li>
				                <li><a href="#"><i class="ha-rss" aria-hidden="true"></i></a></li>
				                <li><a href="#"><i class="ha-envelope" aria-hidden="true"></i></a></li>
				            </ul>
				            <div class="side-menu__footer">
				                &copy; 2020 Headline Authority
				            </div>
				        </div>
				    </div>
				</div>
				<!-- Side Menu Ends -->
			`)
	}
	toggleTheMenu() {
		this.menuContainer.classList.toggle('side-menu--is-visible')
		this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
		this.afterHeader.classList.toggle('after-header--slide')
		document.body.classList.toggle('side-menu__body-fixed')
		this.siteHeaderMenu.classList.toggle('slide-out')
		this.siteHeaderLogo.classList.toggle('slide-out')
		this.siteHeader.classList.toggle('transparent-bg')
		this.siteHeader.classList.toggle('no-top')
		this.siteHeaderSearch.forEach(el => el.classList.toggle('slide-out'))
		this.changeMenuStatus()
	}

	keyPressHandler(e) {
		if(e.keyCode == 27 && this.isMenuOpen == true) {
			this.toggleTheMenu()
		}
	}
	changeMenuStatus() {
		if(this.isMenuOpen) {
			this.isMenuOpen = false;
		} else {
			this.isMenuOpen = true;
		}
	}
}
export default SideMenu