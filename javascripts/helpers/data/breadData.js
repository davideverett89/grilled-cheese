const breads = [
    {
        id: `bread1`,      
        type: "white",
        color: "white",
        price: 10
    },
    {
        id: `bread2`, 
        type: "wheat",
        color: "brown",
        price: 12
    },
    {
        id: `bread3`,
        type: "rye",
        color: "light brown",
        price: 9
    }
];

let selectedBread = [];

const getBreads = () => {
    return breads;
}

const setSelectedBread = (breadButtonId) => {
    const pickedBread = breads.find((x) => x.id === breadButtonId);
    selectedBread.push(pickedBread);
    console.log(pickedBread);
}

const getSelectedBread = () => {
    return selectedBread;
}

export default { getBreads, setSelectedBread, getSelectedBread };