import "./style.css";
import getHome from './home.js';
import getHeader from "./header.js";
import { getMenu } from "./menu.js";
import { getFindUs } from "./findUs.js";

const outerDiv = document.querySelector("div#content");

const header = getHeader(3);
outerDiv.append(header.div);

setupButton(header.buttonsArray[0], "Home", getHome);
setupButton(header.buttonsArray[1], "Menu", getMenu);
setupButton(header.buttonsArray[2], "Find Us", getFindUs);

let currentDiv = getHome();
outerDiv.append(currentDiv);

function setupButton(button, name, page) {
    button.textContent = name;
    button.addEventListener('click', () => {
        currentDiv.remove();
        currentDiv = page();
        outerDiv.append(currentDiv);
    });
}