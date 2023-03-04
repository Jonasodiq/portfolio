// Theme Mode
// const darkMode = () => {

//     const toggleButton = document.querySelector('.dark--toggle')

//     toggleButton.addEventListener('click', function () {
//         document.body.classList.toggle('dark')
//     })

// }
// darkMode()

const menu = () => {

    // Get elements from DOM
    const hamburgerButton = document.querySelector('.header__hamburger')
    const menu = document.querySelector('.menu')

    // Toggle Menu
    const toggleMenu = () => {
        hamburgerButton.classList.toggle('header__hamburger--close')
        menu.classList.toggle('menu__visible')
    }

    // Create Event
    hamburgerButton.addEventListener('click', toggleMenu)

}

menu()

