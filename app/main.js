let themeToggle = document.querySelector('#toggle-button')
let body = document.querySelector('body')

document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark-theme");
      themeToggle.checked = true
    }
});

themeToggle.addEventListener('change', () => {
    if(body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme')
        themeToggle.checked = false
    } else {
        body.classList.add('dark-theme')
        themeToggle.checked = true
    }
})