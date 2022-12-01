export function menu(element) {
    element.textContent = ''; 
    element.setAttribute('class', 'menu');

    for(let i = 0; i < 10; i++) {
        const item = document.createElement('div');
        const itemTitle = document.createElement('p');
        const itemAbout = document.createElement('p');

        itemTitle.innerHTML = 'Salsiccia';
        itemAbout.innerHTML = 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil';

        item.appendChild(itemTitle);
        item.appendChild(itemAbout);

        element.appendChild(item);
    }
};