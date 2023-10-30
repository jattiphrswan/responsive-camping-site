const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
}    
// /*===== NAV CLOSE =====*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        });
}

//============remove menu mobile=====//
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    //when we click  nav__link remove show menu//
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//===========change background=================//

const bgHeader = () =>{
    const header = document.getElementById('header')
    //========when  the scroll is greater  than 50vw =========//
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

//==================animation=========================//
gsap.from('.home__img-2', 1.2, {opacity: 0, y: 200, delay: .1} )
gsap.from('.home__img-3', 1.2, {opacity: 0, y: 200, delay: .5} )
gsap.from('.home__data', 1.2, {opacity: 0, y: -60, delay: 1} )
gsap.from('.home__bird-1', 1.2, {opacity: 0, x: -90, delay: 1.1} )
gsap.from('.home__bird-2', 1.2, {opacity: 0, x: 90, delay: 1.2} )
gsap.from('.home__img-1', 1.2, {opacity: 0, y: 200, delay: 1.2} )
gsap.from('.home__bird-4', 1.2, {opacity: 0, x: 200, delay: 1.3} )