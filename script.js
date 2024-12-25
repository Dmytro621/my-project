const headerMenuButton = document.querySelector('.menu-button')
const headerMenu = document.querySelector('.menu')
const headerMenuCloseButton = document.querySelector('.menu-close-button')
const header = document.querySelector('header')

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

window.addEventListener('click', () => {
    if (headerMenu.classList.contains('active-grid')) {
        headerMenu.classList.remove('active-grid')
        headerMenuButton.classList.remove('hidden')
        headerMenuCloseButton.classList.add('hidden')
    }
})

window.addEventListener('touchstart', () => {
    if (headerMenu.classList.contains('active-grid')) {
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
