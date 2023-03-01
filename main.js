// Theme Mode
const darkMode = () => {

    const toggleButton = document.querySelector('.dark--toggle')

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark')
    })

}
darkMode()

