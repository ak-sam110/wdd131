// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            menuBtn.innerHTML = "&#9776;"; // Hamburger icon
        } else {
            menu.style.display = "flex";
            menuBtn.innerHTML = "✖"; // Close icon
        }
    });

    // Footer Dynamic Year
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});