/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

    if (arr === null || arr.length === 0) {
        return false;
    }
    
    for (let i = 0 ; i < arr.length ; i++) {

        for (let j = 0 ; j < arr.length ; j++) {

            if (i !== j) {

                if (arr[i] === (arr[j] * 2)) {

                    return true;
                }
            }
        }
    }

    return false;
};

// const arr = [10,2,5,3];
// const arr = [7,1,14,11];
const arr = [3,1,7,11];

console.log(checkIfExist(arr));