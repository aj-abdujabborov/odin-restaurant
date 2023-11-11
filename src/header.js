export default function getHeader(numButtons = 0) {
    const div = document.createElement('div');
    div.classList.add('header');

    const getNewButton = () => document.createElement('button');
    const buttonsArray = Array(numButtons);
    for (let i = 0; i < numButtons; i++) {
        buttonsArray[i] = getNewButton();
    }

    buttonsArray.forEach((element) => div.append(element));

    return {div, buttonsArray};
}