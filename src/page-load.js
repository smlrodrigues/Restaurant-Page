import RestaurantImage from './jay.jpg';

export function pageLoad(element) {
    const restImg = new Image();
    restImg.src = RestaurantImage;

    element.appendChild(restImg);

    const headline = document.createElement('h1');
    headline.innerHTML = 'Restaurant';

    element.appendChild(headline);

    const about = document.createElement('p');
    about.innerHTML = "Restaurant's opened on Thanksgiving Day 1990. Chef / Owner Sml began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Sml. Today, NYC's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.";

    element.appendChild(about);
};