import "https://code.jquery.com/jquery-3.6.0.min.js";
$("#toggleDarkMode").on("click", () => {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
    }
    else {
        localStorage.theme = 'dark';
    }
    setTheme();
});
function setTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        $("#toggleDarkMode").html($("<img>", {
            src: "/svg/moon.svg",
            style: "height:1rem;"
        }).prop("outerHTML"));
    }
    else {
        document.documentElement.classList.remove('dark');
        $("#toggleDarkMode").html($("<img>", {
            src: "/svg/sun.svg",
            style: "height:1rem;"
        }).prop("outerHTML"));
    }
}
jQuery(() => {
    setTheme();
});
