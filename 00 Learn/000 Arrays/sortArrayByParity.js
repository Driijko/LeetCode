/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    let writePointer = 0;
    let temp;

    A.forEach((num, index) => {
        if (num % 2 === 0) {
            temp = A[writePointer];
            A[writePointer] = num;
            A[index] = temp;
            writePointer++;
        }
    })
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
sortArrayByParity(array)
console.log(array);