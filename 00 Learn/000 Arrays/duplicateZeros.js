/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    let replace = 0;
    let temp;
    let currentIndex = 0;
    
    while (currentIndex < arr.length) {

        if (arr[currentIndex] !== 0) {
            currentIndex++;
        }
        else {
            for (let i = currentIndex + 1; i < arr.length ; i++) {
                temp = arr[i];
                arr[i] = replace;
                replace = temp;
            }
            console.log(arr);
            replace = 0;
            currentIndex += 2;
        }        
    }
};

const array = [0];
duplicateZeros(array);
// console.log(array);