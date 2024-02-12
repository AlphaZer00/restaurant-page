const loadAboutPage = () => {
    const aboutUs = document.createElement('div');
    const emailPrompt = document.createElement('div');
    const contactInfo = document.createElement('div');
    const containerDiv = document.createElement('div');

    aboutUs.classList.add('about');
    emailPrompt.classList.add('email');
    contactInfo.classList.add('contact');
    containerDiv.classList.add('contact-container');
    containerDiv.append(emailPrompt, contactInfo);

    const aboutTitle = document.createElement('h2');
    const aboutP = document.createElement('p');
    aboutTitle.textContent = 'About Us';
    aboutP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    aboutUs.append(aboutTitle, aboutP);

    const emailTitle = document.createElement('h2');
    const emailInput = document.createElement('input');
    emailTitle.textContent = 'News & Special Offers';
    emailInput.setAttribute('type', 'email');
    emailInput.classList.add('news-input');
    emailInput.setAttribute('placeholder', 'Enter your email');
    emailInput.required = true;
    const emailButton = document.createElement('button');
    emailButton.setAttribute('type', 'submit');
    emailButton.innerText=('Submit');
    emailPrompt.append(emailTitle, emailInput, emailButton);

    const contactTitle = document.createElement('h2');
    const address = document.createElement('p');
    const phoneNum = document.createElement('p');
    const hours1 = document.createElement('p');
    const hours2 = document.createElement('p');
    contactTitle.textContent = 'Contact Us';
    address.textContent = '123 Main St Cityville, NY 10023';
    phoneNum.textContent = '+1(212)555-8012';
    hours1.textContent = 'Mon - Thu: 6AM - 3PM';
    hours2.textContent = 'Fri - Sun: 8AM - 5PM';
    contactInfo.append(contactTitle, address, phoneNum, hours1, hours2);

    content.append(aboutUs, containerDiv);
}

export default loadAboutPage;