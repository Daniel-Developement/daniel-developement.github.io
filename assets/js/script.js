const body = document.querySelector('body');
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersColorScheme.matches) {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}