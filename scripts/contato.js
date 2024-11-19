document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        input.addEventListener("input", function () {

            const label = input.previousElementSibling;
            
            if (label) {
                const span = label.querySelector("span");
                if (span) {
                    if (input.value.trim() == "") {
                        span.classList.remove("preenchido");
                    } else {
                        span.classList.add("preenchido");
                    }
                }
            }
        });
    });
});