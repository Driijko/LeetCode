/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    const result = [];
    let arrayLeftIndex = 0;
    let arrayRightIndex = A.length - 1;

    for (let resultIndex = A.length - 1 ; resultIndex >= 0 ; resultIndex--) {

        if (Math.abs(A[arrayLeftIndex]) <= Math.abs(A[arrayRightIndex])) {
            result[resultIndex] = Math.pow(A[arrayRightIndex], 2);
            arrayRightIndex--;
        }
        else {
            result[resultIndex] = Math.pow(A[arrayLeftIndex], 2);
            arrayLeftIndex++;
        }
    }

    return result;
}

const array = [-5, -4, -2, -1, 0, 1, 2, 3];
console.log(sortedSquares(array));