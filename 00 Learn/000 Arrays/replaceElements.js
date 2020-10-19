/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    if (
        arr === null
        || arr.length < 2
    ) {
        throw new Error("Input array must have at least two elements");
    }

    let lastGreatestElement;
    let lastGreatestElementIndex;
    
    for (let i = 0 ; i < arr.length ; i++) {

        if (
            !(lastGreatestElement)
            || i >= lastGreatestElementIndex
        ) {
            [lastGreatestElement, lastGreatestElementIndex] = greatestElement(arr, i + 1);
        }

        if (i === arr.length - 1) {
            arr[i] = -1;
        }
        else {
            arr[i] = lastGreatestElement;
        }
    }

    return arr;
};

function greatestElement(arr, startIndex) {

    let greatestElement = arr[startIndex];
    let greatestElementIndex = startIndex;

    for (let i = startIndex + 1 ; i < arr.length ; i++) {
        if (arr[i] > greatestElement) {
            greatestElement = arr[i];
            greatestElementIndex = i;
        }
    }

    return [greatestElement, greatestElementIndex];
}

// const array = [17, 18, 4, 5, 2, 9, -5, 0];
const array = [0, 20];
// console.log(greatestElement(array, 2));
replaceElements(array)
console.log(array);