// const darkMode = () => {

//     const toggleButton = document.querySelector('.dark--toggle')

//     toggleButton.addEventListener('click', function () {
//         document.body.classList.toggle('dark')
//     })

// }

// darkMode()

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementsById('dark--toggle');

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('dark');
    content.classList.toggle('night');
})
