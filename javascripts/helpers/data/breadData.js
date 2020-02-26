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

let selectedBreadId;

const getBreads = () => {
    return breads;
}

const setSelectedBread = (breadObject) => {
    selectedBreadId = breadObject;
    console.log(selectedBreadId);
}

export default { getBreads, setSelectedBread };