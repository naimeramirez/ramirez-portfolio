const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
const navLinks = document.getElementById("navLinks");

hamburgerCheckbox.addEventListener("change", () => {
    if (hamburgerCheckbox.checked) {
        navLinks.style.visibility = "visible";
        navLinks.style.opacity = "1";
    } else {
        navLinks.style.visibility = "hidden";
        navLinks.style.opacity = "0";
    }
});