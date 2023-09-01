"use strict";
(function () {

    const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
    const navLinks = document.getElementById("navLinks");

    hamburgerCheckbox.addEventListener("change", () => {
        if (hamburgerCheckbox.checked) {
            navLinks.classList.remove("hidden");
        } else {
            navLinks.classList.add("hidden");
        }
    });

    let viewportWidth;

    function uncheckCheckbox() {
        if (hamburgerCheckbox.checked) {
            hamburgerCheckbox.checked = false;
            navLinks.classList.add("hidden");
        }
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth !== viewportWidth) {
            uncheckCheckbox();
            viewportWidth = window.innerWidth;
        }
    });

    window.addEventListener("scroll", () => {
        uncheckCheckbox()
    });

})();