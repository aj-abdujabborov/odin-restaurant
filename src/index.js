import "./style.css";
import getHome from './home.js';
import getHeader from "./header.js";
import { getMenu } from "./menu.js";
import { getFindUs } from "./findUs.js";

const divContent = document.querySelector("div#content");
let currentDiv;

const header = getHeader(3);
header.buttonsArray[0].textContent = "Home";
header.buttonsArray[0].addEventListener('click', () => {
    currentDiv.remove();
    currentDiv = getHome();
    divContent.append(currentDiv);
});
header.buttonsArray[1].textContent = "Menu";
header.buttonsArray[1].addEventListener('click', () => {
    currentDiv.remove();
    currentDiv = getMenu();
    divContent.append(currentDiv);
});
header.buttonsArray[2].textContent = "Find Us";
header.buttonsArray[2].addEventListener('click', () => {
    currentDiv.remove();
    currentDiv = getFindUs();
    divContent.append(currentDiv);
})

divContent.append(header.div);

currentDiv = getHome();
divContent.append(currentDiv);