
// * to run the code and showing the result in terminal : `node main.js`

// Start task-1 ////////////////////////////////
const listOfNumbers = [1,2,5,,7,8,9,6,5,4,7,8,2,5,8,7];
  function calculateSumAndAverage(list) {
    const sum = list.reduce((accumulator, current) => accumulator + current, 0);
    return sum
}
const calculatedSum = calculateSumAndAverage(listOfNumbers)
console.log('Total sum: ' + calculatedSum);
console.log('the average: ' + calculatedSum/listOfNumbers.length);
// End task-1 ////////////////////////////////

// Start task-2 ////////////////////////////////
const listOfItems = ["java", "js", "c++", "java", "java", "ts","php","ts","php","ts"];
function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

const uniqueStrings = removeDuplicates(listOfItems);
console.log(uniqueStrings);
// End task-2 ////////////////////////////////
