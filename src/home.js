import Image1 from "./jay.jpg";

export function home(element) {
    element.textContent = ''; 
    element.setAttribute('class', 'home');

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    
    para1.innerHTML = 'Best pizza in your country';
    para1.setAttribute('class', 'homeTitle');

    para2.innerHTML = 'Made with passion since 1908';
    
    element.appendChild(para1);
    element.appendChild(para2);
    
    const imageHome = new Image();
    imageHome.src = Image1;

    element.appendChild(imageHome);

    const para3 = document.createElement('p');
    para3.innerHTML = 'Order online or visit us!';

    element.appendChild(para3);
};