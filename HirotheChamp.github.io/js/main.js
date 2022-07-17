const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.menu-nav_item')
let inputBox = document.querySelectorAll('.inputBox')
let projectLinks = document.querySelectorAll('.projects_item')
let showMenu = false;



menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('mousemove', cursor);

function cursor(e){
     mouseCursor.style.top = e.clientY + 'px';
     mouseCursor.style.left = e.clientX + 'px';

}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        // link.classList.remove('menu-nav-item');
    });

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        // link.classList.add('menu-nav-item')
    });

    projectLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-shrink');
           
        });
    
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-shrink');
           
        });
 
    });

    inputBox.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-change');
            // link.classList.remove('menu-nav-item');
        });
    
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-change');
            // link.classList.add('menu-nav-item')
        });

    });
    
});



function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}