import loadHomePage from './homePage';
import loadMenuPage from './menuPage';
import loadAboutPage from './aboutPage';
import './style.css';
import gh from './github-mark.svg';
import ldn from './linkedin.svg';

loadHomePage();
function addNavEventListener() {
    const homeBtn = document.getElementById('home-button');
    const menuBtn = document.getElementById('menu-button');
    const aboutBtn = document.getElementById('about-button');

    homeBtn.addEventListener('click', switchTabs);
    menuBtn.addEventListener('click', switchTabs);
    aboutBtn.addEventListener('click', switchTabs);
}

function switchTabs(e) {
    content.textContent = '';
    if (e.target.id === 'home-button') {
        loadHomePage();
    } else if (e.target.id === 'menu-button') {
        loadMenuPage();
    } else if (e.target.id === 'about-button') {
        loadAboutPage();
    }
    content.classList.add('transition');
    setTimeout(() => {
        content.classList.remove('transition');
    }
    ,500);
}

addNavEventListener();

const GHimage = document.querySelector('a[href*="https://github.com/AlphaZer00"]');
GHimage.innerHTML=`<img src="${gh}" alt="GitHub">`;

const LIimage = document.querySelector('a[href*="https://linkedin.com/in/batuhan-dasdemir"]');
LIimage.innerHTML=`<img src="${ldn}" alt="LinkedIn">`