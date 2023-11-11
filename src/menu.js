export function getMenu() {
    function makeMenuItem(name, price, description) {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        const h3 = document.createElement('h3');
        const h3Price = document.createElement('h3');
        const p = document.createElement('p');

        h3.textContent = name;
        h3.classList.add('menu-item-name');
        h3Price.textContent = price;
        h3Price.classList.add('menu-item-price');
        p.textContent = description;
        p.classList.add('menu-item-description');

        div.append(h3, h3Price, p);
        return div;
    }

    let menuList = [
        {
            name: "Hamburger",
            price: "$5",
            description: "A hamburger with lettuce, tomato, and onion.",
        },
        {
            name: "Eggs and Bacon",
            price: "$4",
            description: "Two eggs and three strips of bacon.",
        },
        {
            name: "Steak",
            price: "$10",
            description: "A steak with a side of mashed potatoes and beans.",
        },
        {
            name: "Peach pie",
            price: "$3",
            description: "A delicious peach pie.",
        },
    ];

    const div = document.createElement('div');
    div.classList.add('menu');
    menuList.forEach((elem) => {
        const item = makeMenuItem(elem.name, elem.price, elem.description);
        div.append(item);
    })

    return div;
}
