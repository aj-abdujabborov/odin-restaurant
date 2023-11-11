export function getFindUs() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = 'Find Us';
    p.textContent = "We're located on highway 49.";

    div.append(h1, p);
    return div;
} 