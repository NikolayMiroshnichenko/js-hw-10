const input = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const persistedTemes = localStorage.getItem('temes');

if(persistedTemes === Theme.LIGHT) {
    body.classList.add(Theme.LIGHT);
} else {
    body.classList.add(Theme.DARK);
    input.checked = true;
}

input.addEventListener('change', (e) => {
    if(!input.checked) {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('temes', Theme.LIGHT);
        return;
    }; 

    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('temes', Theme.DARK);
})

