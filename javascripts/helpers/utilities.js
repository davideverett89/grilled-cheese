

const printToDom = (divId, stringToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

export default { printToDom };