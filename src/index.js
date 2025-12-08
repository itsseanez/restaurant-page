import "./styles.css";
import about from "./about.js";
import contact from "./contact.js";
import menu from "./menu.js";

const content = document.getElementById("content");
const defaultPageButton = document.getElementById("default-page");
defaultPageButton.classList.add("page-clicked");
content.appendChild(about.page);

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
            content.innerHTML = "";
            content.appendChild(contact.page);

        } else if (button.textContent === "Menu") {
            button.classList.add("page-clicked");
            navButtons.forEach((btn) => {
                if (btn !== button) {
                    btn.classList.remove("page-clicked");
                }
            });
            content.innerHTML = "";
            content.appendChild(menu.page);
        }
    });
});
console.log("hey sean");