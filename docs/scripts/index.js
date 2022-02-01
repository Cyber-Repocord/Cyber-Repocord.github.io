function onWindowResize() {
    let navbarPlaceholder = document.getElementById("navbar-placeholder");
    let navbar = document.getElementById("top-navbar");

    navbarPlaceholder.style.height = window.getComputedStyle(navbar).height;

    let footerPlaceholder = document.getElementById("footer-placeholder");
    let footer = document.getElementById("footer");

    footerPlaceholder.style.height = window.getComputedStyle(footer).height;
}

function refreshTheme() {
    var theme = localStorage.getItem("theme");

    if (theme == null) {
        theme = getComputedStyle(document.documentElement).getPropertyValue("--client-prefered-theme");
        document.documentElement.dataset.isthemeset = false;
    } else {
        document.documentElement.dataset.isthemeset = true;
    }

    document.documentElement.dataset.theme = theme;

    document.getElementById("theme-color").content = theme == "dark" ? "#292930" : "#808080"
    
    setInterval(() => {
        document.documentElement.dataset.loaded = "true";
    }, 1);
}

function switchTheme() {
    var theme = localStorage.getItem("theme");

    if (theme == null) {
        theme = getComputedStyle(document.documentElement).getPropertyValue("--client-prefered-theme");
    }

    if (theme == "dark") localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");

    refreshTheme();
}

function resetTheme() {
    localStorage.removeItem("theme");

    refreshTheme();
}

window.onresize = function() {
    onWindowResize();
}

window.onload = function() {
    document.getElementById("footer").innerHTML = "@" + new Date().getFullYear() + " RepoCord";
    onWindowResize();
    refreshTheme();
}
