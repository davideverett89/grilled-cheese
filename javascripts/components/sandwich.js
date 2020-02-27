import breadData from '../helpers/data/breadData.js';
import cheeseData from '../helpers/data/cheeseData.js';

const sandwichMaker = () => {
    const pickedBread = breadData.getSelectedBread();
    const pickedCheese = cheeseData.getSelectedCheese();
    console.log(pickedBread, pickedCheese);
}

export default { sandwichMaker };