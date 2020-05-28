class RevealOnScroll {
	constructor(items, thresholdValue) {
		this.items = items //Get the items
		this.options = {threshold: thresholdValue} //Set the observer options (threshold)
		this.events() //Call the main event function
	}
	events() { //Main events
		this.initiateObserver() //Call the observer defination
		this.items.forEach(item => { //Call the main observer on each item
			this.revealObserver.observe(item)
		})
	}
	initiateObserver() { //The main observer defination
		this.revealObserver = new IntersectionObserver((els, revealObserver) => {
			els.forEach(el => {
				if(!el.isIntersecting) { //Hide items which are not in viewport when page loads
					this.hideInitially(el)
				} else {
					this.unHide(el) //Reveal as per the scroll
					revealObserver.unobserve(el.target) //Stop the observer for that element after it loaded
				}
			})
		} , this.options)
	}
	hideInitially(el) { //Hide items which are not in viewport when page loads
		el.target.classList.add('reveal-item')
	}
	unHide(el) { //Reveal as per the scroll
		el.target.classList.add('reveal-item--is-visible')
	}
}
export default RevealOnScroll