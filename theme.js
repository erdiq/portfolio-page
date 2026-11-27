document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("theme-toggle");

    // Falls kein Button gefunden wird, nichts ausführen
    if (!themeButton) {
        return;
    }

    // Gespeichertes Theme laden
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeButton.textContent = "🌙";
    } else {
        document.body.classList.remove("light-mode");
        themeButton.textContent = "☀️";
    }


    // Theme wechseln
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙";

        } else {

            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️";

        }

    });

});
