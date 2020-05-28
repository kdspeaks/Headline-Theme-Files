import SideMenu from './modules/SideMenu'
import StickyHeader from './modules/StickyHeader'
import RevealOnScroll from './modules/RevealOnScroll'
import LazyLoad from './modules/LazyLoad'


new SideMenu()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".latest-section__container"), 0.75)
new RevealOnScroll(document.querySelectorAll(".sidebar-post__container"), 0.75)
new RevealOnScroll(document.querySelectorAll(".category-section__popular"), .20)
new RevealOnScroll(document.querySelectorAll(".category-section__latest"), .20)
new RevealOnScroll(document.querySelectorAll(".category-section__list-item"), 0.95)
new LazyLoad()
