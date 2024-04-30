const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");


form.addEventListener("submit", (e) => {
    if (password.value != confirmPassword.value) {
        e.preventDefault();        
        const msg = document.querySelector(".pass-msg");
        msg.classList.toggle("hidden");
    }
})