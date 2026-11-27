const themeButton = document.getElementById("theme-toggle");

// Gespeichertes Theme abrufen
const savedTheme = localStorage.getItem("theme");

// Wenn Light Mode gespeichert wurde
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "🌙";
} else {
    themeButton.textContent = "☀️";
}


// Beim Klick wechseln
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        // Light Mode speichern
        localStorage.setItem("theme", "light");

        themeButton.textContent = "🌙";

    } else {

        // Dark Mode speichern
        localStorage.setItem("theme", "dark");

        themeButton.textContent = "☀️";

    }

});
