import ultilities from '../helpers/utilities.js';
import breadData from '../helpers/data/breadData.js';

const makeBreadRadioButtons = () => {
    const breads = breadData.getBreads();
    let domString = "";
    breads.forEach((bread, i) => {
        domString += '<div class="form-check form-check-inline">';
        domString +=    `<input class="form-check-input bread-choice" type="radio" name="breadRadio" id="${bread.id}" value="option${i + 1}">`;
        domString +=    `<label class="form-check-label" for="${bread.id}">${bread.type}</label>`;
        domString += '</div>';
    });
    ultilities.printToDom("bread-container", domString);
    breadEvents();
}

const breadSelection = (e) => {
    const buttonId = e.target.id;
    const breads = breadData.getBreads();
    let chosenBread = breads.find((x) => x.id === buttonId);
    breadData.setSelectedBread(chosenBread);
}

const breadEvents = () => {
    let breadChoices = document.getElementsByClassName("bread-choice");
    for (let i = 0; i < breadChoices.length; i++) {
        breadChoices[i].addEventListener("click", breadSelection);
    }
}

export default { makeBreadRadioButtons };

