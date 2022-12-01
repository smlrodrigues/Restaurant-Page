export function pageLoad(element) {

    // HEADER
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    // Create Logo Element
    const logo = document.createElement('div');
    const logoText = document.createElement('h1');
    logoText.innerHTML = 'RESTAURANT';
    logo.setAttribute('id', 'logo');
    
    logo.appendChild(logoText);
    
    header.appendChild(logo);

    // Create Navbar Element
    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');

    const list = document.createElement('ul');
    const listElementHome = document.createElement('li');
    const listElementMenu = document.createElement('li');
    const listElementContact = document.createElement('li');

    listElementHome.innerHTML = 'Home';
    listElementHome.setAttribute('class', 'home-nav');

    list.appendChild(listElementHome);

    listElementMenu.innerHTML = 'Menu';
    listElementMenu.setAttribute('class', 'menu-nav');
    
    list.appendChild(listElementMenu);

    listElementContact.innerHTML = 'Contact';
    listElementContact.setAttribute('class', 'contact-nav');

    list.appendChild(listElementContact);
    navbar.appendChild(list);
    header.appendChild(navbar);

    element.appendChild(header);

    // MAIN CONTENT
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    
    main.appendChild(document.createElement('div'));

    element.appendChild(main);

    // FOOTER
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const footerUl = document.createElement('ul');
    const footerLi = document.createElement('li');

    footerLi.innerHTML = 'Copyright © 2022 smlrodrigues';

    footerUl.appendChild(footerLi);
    footer.appendChild(footerUl);

    element.appendChild(footer);
};