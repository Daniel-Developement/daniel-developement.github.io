const body = document.querySelector('body');
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

setInterval(() => {
    if (prefersColorScheme.matches) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}, 1000);