/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    if (A.length < 1) {
        return A;
    }
    
    const squaredArray = [];
    let searchIndex = 0;
    let posNumIndex;
    let negNumIndex;

    if (A[0] >= 0) {
        negNumIndex = null;
        posNumIndex = 0;
    }
    else if (A[A.length - 1] < 0) {
        negNumIndex = A.length - 1;
        posNumIndex = null;
    }
    else {
        while (A[searchIndex] < 0 && searchIndex < (A.length - 1)) {
            searchIndex++;
        }
        negNumIndex = searchIndex - 1;
        posNumIndex = searchIndex;
    }

    for (let i = 0 ; i < A.length ; i++) {
        if (
            !A[negNumIndex]
            || Math.abs(A[negNumIndex]) > A[posNumIndex]
        ) {
            squaredArray[i] = Math.pow(A[posNumIndex], 2);
            posNumIndex++;
        }
        else if (
            !A[posNumIndex]
            || Math.abs(A[negNumIndex]) <= A[posNumIndex]
        ) {
            squaredArray[i] = Math.pow(A[negNumIndex], 2);
            negNumIndex--;
        }
    }
    
    return squaredArray;
};

const array = [-2, 0];
// const array = [0, 1, 2, 3] ;
// const array = [-3, -1, 0, 2, 4];

console.log(sortedSquares(array));