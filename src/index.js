import "./styles.css";
import about from "./about.js";

const content = document.getElementById("content");

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "About") {
            button.classList.add("page-clicked");
            navButtons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove("page-clicked");
                }
            });
            content.innerHTML = "";
            content.appendChild(about.page);

        } else if (button.textContent === "Contact") {
            button.classList.add("page-clicked");
            navButtons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove("page-clicked");
                }
            });
            content.innerHTML = "<h1>Contact Page Coming Soon!</h1>";
            
        } else if (button.textContent === "Menu") {
            button.classList.add("page-clicked");
            navButtons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove("page-clicked");
                }
            });
            content.innerHTML = "<h1>Menu Page Coming Soon!</h1>";
        }
    });
});
console.log("hey sean");