class StickyHeader {
	constructor() {
		this.mainGrid = document.querySelector(".after-header") //Get the main grid
		this.siteLogo = document.querySelector(".site-header__logo") //Get the site logo
		this.siteHeader = document.querySelector(".site-header") //Get the site header
		this.options = {rootMargin:"10px 0px -94% 0px", threshold: 0} //Set the observer options
		this.events() //Call the main event function
	}
	events() { //Main events
		this.initiateObserver() //Call the observer defination
		this.headerScrollObserver.observe(this.mainGrid) //Call the main observer on mainGrid
	}
	initiateObserver() { //The main observer defination
		this.headerScrollObserver = new IntersectionObserver((els, headerScrollObserver) => {
			els.forEach(el => {
				console.log(el.intersectionRatio)
				if(el.intersectionRatio != 0) {
					this.siteLogo.classList.add("site-header__logo--small")
					// this.siteHeader.classList.add("site-header__no-top")
				} else {
					this.siteLogo.classList.remove("site-header__logo--small")
					// this.siteHeader.classList.remove("site-header__no-top")
				}
				// if(el.isIntersecting) {
				// 	this.siteLogo.classList.remove("site-header__logo--small")
				// 	this.siteHeader.classList.remove("site-header__no-top")
				// 	console.log(2)
				// } else {
				// 	this.siteLogo.classList.add("site-header__logo--small")
				// 	this.siteHeader.classList.add("site-header__no-top")
				// 	console.log(1)
				// }
			})
		} , this.options)
	}
}
export default StickyHeader