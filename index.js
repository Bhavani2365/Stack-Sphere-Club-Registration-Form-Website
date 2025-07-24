document.addEventListener("DOMContentLoaded", function () {
    // Function to validate the registration form
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.querySelector("input[type='text']").value;
            const age = document.querySelector("input[type='number']").value;
            const email = document.querySelector("input[type='email']").value;
            const resume = document.querySelector("input[type='file']").value;

            if (!name || !age || !email || !resume) {
                alert("Please fill out all fields before submitting.");
                event.preventDefault();
            } else {
                alert("Registration successful!");
            }
        });
    }

    // Function for index.html - Smooth scrolling for links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});