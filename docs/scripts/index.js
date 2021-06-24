function onWindowResize() {
    let navbarPlaceholder = document.getElementById("navbar-placeholder");
    let navbar = document.getElementById("top-navbar");

    navbarPlaceholder.style.height = window.getComputedStyle(navbar).height;

    let footerPlaceholder = document.getElementById("footer-placeholder");
    let footer = document.getElementById("footer");

    footerPlaceholder.style.height = window.getComputedStyle(footer).height;
}

function refreshTheme() {
    let theme = localStorage.getItem("theme");

    document.documentElement.dataset.theme = theme;
    
    setInterval(() => {
        document.documentElement.dataset.loaded = "true";
    }, 1);
}

function switchTheme() {
    if (localStorage.getItem("theme") == "dark") localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");

    refreshTheme();
}

window.onresize = function() {
    onWindowResize();
}

window.onload = function() {
    onWindowResize();
    refreshTheme();
}