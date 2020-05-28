class LazyLoad {
	constructor() {
		this.images = document.querySelectorAll(".b-lazy")
		this.mobileImageUrl = document.querySelectorAll('[data-mobile]')
		this.ifBelow768 = window.matchMedia("(max-width: 767px)")
		this.options = {
			rootMargin: "-20% 0px 20% 0px",
			thredshold: 1
		}
		this.events()
	}
	events() {
		this.initiateObserver()
		this.callTheObserver()
		this.ifBelow768.addListener(() => {
			this.mobileImageUrl.forEach(el => this.setMobileImage(el))
		})
	}
	setMobileImage(el) {
		if(this.ifBelow768.matches) {
			el.style.backgroundImage = `url('${el.dataset.mobile}')`
		} else {
			el.style.backgroundImage = `url('${el.dataset.src}')`
		}
	}
	callTheObserver() {
		this.images.forEach(image => {
			this.imageObserver.observe(image)
		})
	}
	initiateObserver() {
		this.imageObserver = new IntersectionObserver((els, imageObserver) => {
			els.forEach(el => {
				if(!el.isIntersecting) {
					return
				} else {
					this.addLazyLoad(el)
					imageObserver.unobserve(el.target)
				}
			})
		}, this.options)
	}
	addLazyLoad(el) {
		if(el.target.dataset.mobile) {
			this.setMobileImage(el.target)
		} else {
			el.target.style.backgroundImage = `url('${el.target.dataset.src}')`
		}
	}
}
export default LazyLoad