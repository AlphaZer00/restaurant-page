const loadMenuPage = () => {
    function MenuItem(name, info) {
        this.name = name;
        this.info = info;
    }

    const beverage1 = new MenuItem('Mimosa', 'Chilled Sparkling Wine, Orange Juice');
    const beverage2 = new MenuItem('Tequila Sunrise', 'Blanco Tequila, Orange Juice, Grenadine, Sliced Lime');
    const beverage3 = new MenuItem('Peach Belini', 'Prosecco, Peach Schnapps, Fresh Peaches, Fresh Strawberries');
    const beverage4 = new MenuItem('Espresso Martini', 'Vodka, Coffee Liquor, Espresso, Simple Syrup');
    const beverages = [beverage1, beverage2, beverage3, beverage4];

    const side1 = new MenuItem('French Fries', 'Golden Fried Yukon Potatoes');
    const side2 = new MenuItem('Brussels Sprouts', 'Herbs, Garlic, Lemon Dressing');
    const side3 = new MenuItem('Parfait', 'Greek Yogurt, Mixed Berries, House Granola');
    const side4 = new MenuItem('Fruit Salad','Pineapple, Strawberry, Blueberry, Grape, Whipped Cream');
    const sides = [side1, side2, side3, side4];

    const entree1 = new MenuItem('Classic Combo' ,'Two Eggs, Bacon, Toast, Buttermilk Pancakes');
    const entree2 = new MenuItem('Avocado Toast' ,'Toasted Sourdough, Fresh Avocado, Fried Egg, Cherry Tomatoes, Chives');
    const entree3 = new MenuItem('Bacon Egg and Cheese' ,'Bacon, Two Eggs, American Cheese, served on Bagel of CHoice');
    const entree4 = new MenuItem('Eggs Benedict', 'Poached Egg, Canadian Bacon, Hollandaise Sauce');
    const entrees = [entree1, entree2, entree3, entree4];

    const createMenuSection = (section, arr) => {
        let sectionArea = document.createElement('div');
        sectionArea.classList.add(section);

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section;
        sectionArea.append(sectionTitle);

        for (let i=0; i < 4; i++) {
            const menuItem = document.createElement('div');
            menuItem.classList.add(`${section}-item`);

           
            const header = document.createElement('h3');
            header.textContent = arr[i].name;

            const description = document.createElement('p');
            description.textContent = arr[i].info;

            menuItem.append(header, description);
            sectionArea.append(menuItem);
        }

        content.append(sectionArea);
    }

    createMenuSection("Drinks", beverages);
    createMenuSection('Sides', sides);
    createMenuSection('Entrees', entrees);
}

export default loadMenuPage;

