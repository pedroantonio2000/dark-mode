const darkTheme = document.querySelector('.bi-moon');
const lightTheme = document.querySelector('.bi-brightness-high');


darkTheme.addEventListener('click', toggleDarkTheme);
lightTheme.addEventListener('click', toggleLightTheme);


function toggleDarkTheme() {
    document.body.classList.toggle('dark');

    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
}

function toggleLightTheme() {
    document.body.classList.toggle('dark');

    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
}


function loadTheme() {
    const darkMode = localStorage.getItem('dark');
    
    if(darkMode) {
        toggleLightTheme();
    } 
    
}

loadTheme();