const loadHomePage = () => {
    const paragraph = document.createElement('p');
    const img = document.createElement('img');
    const span = document.createElement('span');

    paragraph.textContent = "Welcome to Big Bobby's Brunch! We've been serving delicious breakfast and lunch foods since 1964! Come on down to pay us a visit, where we guarantee a fun and family-friendly environment with unforgettable meals!"
    img.src = 'breakfast.jpg';
    img.alt = 'Image of table with various breakfast foods';
    span.innerHTML = 'Photo by <a href="https://unsplash.com/@therachelstory?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rachel Park</a> on <a href="https://unsplash.com/photos/round-white-ceramic-plate-filled-with-waffle-hrlvr2ZlUNk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash';

    content.append(paragraph, img, span);
}

export default loadHomePage;