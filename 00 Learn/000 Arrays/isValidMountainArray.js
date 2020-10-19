/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {

    if (A === null || A.length < 3) {
        return false;
    }

    let stage = "increasing";
    let lastNum = A[0];

    for (let i = 1 ; i < A.length ; i++) {

        const num = A[i];

        if (stage === "increasing") {
    
            if (num === lastNum) {
                return false;
            }
            else if (num < lastNum) {
                if (i === 1) {
                    return false;
                }
                else {
                    stage = "decreasing";
                }
            }
        }
        else if (stage === "decreasing") {
            if (num >= lastNum) {
                return false;
            }
        }

        lastNum = num;
    }

    if (stage === "decreasing") {
        return true;
    }
    else {
        return false;
    }
};

const array = [0,3,2,1, 2];
console.log(validMountainArray(array));