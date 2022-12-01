import Image2 from "./restaurant-location.png";

export function contact(element) {
    element.textContent = ''; 
    element.setAttribute('class', 'contact');

    const telephone = document.createElement('p');
    telephone.innerHTML = '📞 123 456 789';

    element.appendChild(telephone);

    const address = document.createElement('p');
    address.innerHTML = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

    element.appendChild(address);

    const mapImage = new Image();
    mapImage.src = Image2;

    element.appendChild(mapImage);
};