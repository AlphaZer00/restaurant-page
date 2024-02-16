import loadHomePage from './homePage';
import loadMenuPage from './menuPage';
import loadAboutPage from './aboutPage';
import './style.css';

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