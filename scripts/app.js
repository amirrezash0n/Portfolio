const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenuList = document.querySelector('.menu-mobile');
const portfolioListLinks = document.querySelectorAll('.portfolio-list__link')

let navOpen = false;
hamburgerMenu.addEventListener("click", function () {
    if (navOpen) {
        hamburgerMenu.classList.remove("hamburger-menu--open")
        navMenuList.classList.remove("menu-mobile--open")

        navOpen = false
    } else {
        hamburgerMenu.classList.add("hamburger-menu--open")
        navMenuList.classList.add("menu-mobile--open")
        navOpen = true
    }
})

portfolioListLinks.forEach(portfolioListLinks => {
    portfolioListLinks.addEventListener('click',function (){
        document.querySelector('.portfolio-list__link--active').classList.remove('portfolio-list__link--active')
        document.querySelector('.portfolio-content--show').classList.remove('portfolio-content--show')
        this.classList.add('portfolio-list__link--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio-content--show')
    })
})
