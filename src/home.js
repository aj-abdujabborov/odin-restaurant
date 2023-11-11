import Image from "./Palace+Grill+Restaurant-100.jpg"

export default function getHome() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');
    
    h1.textContent = 'Nexus Roadhouse';
    p.textContent = "We hope you have a great time at the nexus between amazing flavor and texture. We're located on highway 49.";
    img.src = Image;
    img.alt = "grilled foods";
    
    div.append(h1, p, img);
    return div;
}
