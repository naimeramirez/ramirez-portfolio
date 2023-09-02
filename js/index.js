"use strict";
(function () {
    const contactForm = document.getElementById("contact-form");
    const contactButton = document.getElementById("contact-button");
    const contactSubject = document.getElementById("subject");
    const contactEmail = document.getElementById("email");
    const contactName = document.getElementById("name");
    const contactMessage = document.getElementById("message");

    function sendEmail() {
        contactForm.innerHTML = "<div class='submit-message'><p>YOUR MESSAGE HAS BEEN SENT</p></div>"
    }

    let subjectFilled = false;
    let emailFilled = false;
    let nameFilled = false;
    let messageFilled = false;

    function checkSubject() {
        if (contactSubject.value === "") {
            contactSubject.classList.add("missing-info");
            subjectFilled = false;
        } else {
            contactSubject.classList.remove("missing-info");
            subjectFilled = true;
        }
    }

    function checkEmail() {
        if (contactEmail.value === "") {
            contactEmail.classList.add("missing-info");
            emailFilled = false;
        } else {
            contactEmail.classList.remove("missing-info");
            emailFilled = true;
        }
    }

    function checkName() {
        if (contactName.value === "") {
            contactName.classList.add("missing-info");
            nameFilled = false;
        } else {
            contactName.classList.remove("missing-info");
            nameFilled = true;
        }
    }

    function checkMessage() {
        if (contactMessage.value === "") {
            contactMessage.classList.add("missing-info");
            messageFilled = false;
        } else {
            contactMessage.classList.remove("missing-info");
            messageFilled = true;
        }
    }

    contactButton.addEventListener("click", () => {
        checkSubject();
        checkEmail();
        checkName();
        checkMessage();
        if ((subjectFilled === true) && (emailFilled === true) && (nameFilled === true) && (messageFilled === true)) {
            sendEmail();
        } else {

        }
    })

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