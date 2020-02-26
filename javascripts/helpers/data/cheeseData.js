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

let selectedCheeseObject;

const getCheese = () => {
    return cheeses;
}

const setSelectedCheese = (cheeseId) => {
    selectedCheeseObject = cheeseId;
    console.log(selectedCheeseObject);
}

export default { getCheese, setSelectedCheese };