import { pageLoad } from "./page-load";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import './style.css';

const content = document.getElementById('content');
pageLoad(content);

const main = document.querySelector('#main div');
home(main);

document.querySelector('.home-nav').addEventListener('click', () => home(main));
document.querySelector('.menu-nav').addEventListener('click', () => menu(main));
document.querySelector('.contact-nav').addEventListener('click', () => contact(main));
