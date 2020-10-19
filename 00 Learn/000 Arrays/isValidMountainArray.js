/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {

    let stage = "increasing";
    let lastNum = A[0];

    for (let i = 1 ; i < A.length ; i++) {

        const num = A[i];

        if (stage === "increasing") {
            if (num === lastNum) {
                return false;
            }
            else if (num < lastNum) {
                stage = "decreasing";
            }
        }
        else if (stage === "decreasing") {
            if (num >= lastNum) {
                return false;
            }
        }

        lastNum = num;
    }

    return true;
};

const array = [0,3,2,1, 2];
console.log(validMountainArray(array));