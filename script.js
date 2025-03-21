const headerMenuButton = document.querySelector('.menu-button')
const headerMenu = document.querySelector('.menu')
const headerMenuCloseButton = document.querySelector('.menu-close-button')
const header = document.querySelector('header')
const headerMenuLink = document.querySelectorAll('.menu a')


headerMenuButton.addEventListener('click', (event) => {
    event.stopPropagation()
    headerMenu.classList.toggle('active-grid')
    headerMenuButton.classList.toggle('hidden')
    headerMenuCloseButton.classList.toggle('hidden')
})

headerMenuCloseButton.addEventListener('click', () => {
    headerMenuButton.classList.toggle('hidden')
    headerMenuCloseButton.classList.toggle('hidden')
})

window.addEventListener('click', (event) => {
    if (headerMenu.classList.contains('active-grid') && !headerMenu.contains(event.target) && !headerMenuButton.contains(event.target)) {
        headerMenu.classList.remove('active-grid')
        headerMenuButton.classList.remove('hidden')
        headerMenuCloseButton.classList.add('hidden')
    }
})

window.addEventListener('touchstart', (event) => {
        if (headerMenu.classList.contains('active-grid') && !headerMenu.contains(event.target) && !headerMenuButton.contains(event.target)) {
        headerMenu.classList.remove('active-grid')
        headerMenuButton.classList.remove('hidden')
        headerMenuCloseButton.classList.add('hidden')
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        header.style.backgroundColor = '#dddfdc'
    } else {
        header.style.backgroundColor = ''
    }
})

headerMenuLink.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.toggle('active-grid')
        headerMenuButton.classList.remove('hidden')
        headerMenuCloseButton.classList.add('hidden')
    })
})

const cardOpenButtons = document.querySelectorAll('.card-open-button');
const cardContentsSecond = document.querySelectorAll('.card-content-second');
const cardContentHero = document.querySelectorAll('.card-content-hero');

cardOpenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        cardContentsSecond[index].classList.toggle('active');
        cardOpenButtons[index].classList.toggle('active');
        cardContentHero[index].classList.toggle('active');
    });
});