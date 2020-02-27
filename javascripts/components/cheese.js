import utilites from '../helpers/utilities.js';
import cheeseData from '../helpers/data/cheeseData.js';
import sandwich from '../components/sandwich.js';

const makeCheeseButtons = () => {
    const cheeses = cheeseData.getCheese();
    let domString = "";
    cheeses.forEach((cheese) => {
        domString += `<button id="${cheese.id}" type="button" class="btn btn-primary cheese-button m-3">${cheese.type}</button>`;
    })
    utilites.printToDom("cheese-container", domString);
    cheeseEvents();
}

const selectedCheese = (e) => {
    const cheeseButtonId = e.target.id;
    cheeseData.setCheese(cheeseButtonId);
    sandwich.sandwichMaker();
}

const cheeseEvents = () => {
    let cheeseChoices = document.getElementsByClassName("cheese-button");
    for (let i = 0; i < cheeseChoices.length; i++) {
        cheeseChoices[i].addEventListener("click", selectedCheese);
    }
}

export default { makeCheeseButtons };