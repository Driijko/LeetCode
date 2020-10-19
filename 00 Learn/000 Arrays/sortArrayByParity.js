/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    let result = [];
    let writePointer = 0;

    A.forEach(num => {
        if (num % 2 === 0) {
            result[writePointer] = num;
            writePointer++;
        }
    })

    A.forEach(num => {
        if (!(num % 2 === 0)) {
            result[writePointer] = num;
            writePointer++;
        }
    })

    return result;
};

const array = [3,1,2,4];
console.log(sortArrayByParity(array));