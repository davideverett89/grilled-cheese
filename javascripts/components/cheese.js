import utilites from '../helpers/utilities.js';
import cheeseData from '../helpers/data/cheeseData.js';

const makeCheeseButtons = () => {
    const cheeses = cheeseData.getCheese();
    let domString = "";
    cheeses.forEach((cheese) => {
        domString += `<button id="${cheese.id}" type="button" class="btn btn-primary cheese-button">${cheese.type}</button>`;
    })
    utilites.printToDom("cheese-container", domString);
    cheeseEvents();
}

const selectedCheese = (e) => {
    const cheeseId = e.target.id;
    const cheeses = cheeseData.getCheese();
    let pickedCheese = cheeses.find((x) => x.id === cheeseId);
    cheeseData.setSelectedCheese(pickedCheese);
}

const cheeseEvents = () => {
    let cheeseChoices = document.getElementsByClassName("cheese-button");
    for (let i = 0; i < cheeseChoices.length; i++) {
        cheeseChoices[i].addEventListener("click", selectedCheese);
    }
}

export default { makeCheeseButtons };