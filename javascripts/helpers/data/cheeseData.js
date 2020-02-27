const cheeses = [
    {
        id: "cheese1",
        type: "Swiss",
        color: "white",
        price: 2
    },
    {
        id: "cheese2",
        type: "Blue",
        color: "blue",
        price: 3
    },
    {
        id: "cheese3",
        type: "American",
        color: "yellow",
        price: 1
    },
];

let selectedCheeses = [];

const setCheese = (cheeseButtonId) => {
    const pickedCheese = cheeses.find((x) => x.id === cheeseButtonId);
    selectedCheeses.push(pickedCheese);
    console.log(pickedCheese);
}

const getCheese = () => {
    return cheeses;
}

const getSelectedCheese = () => {
    return selectedCheeses;
}

export default { getCheese, setCheese, getSelectedCheese };