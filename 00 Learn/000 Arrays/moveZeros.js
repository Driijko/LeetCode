/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if (nums === null) {
        return;
    }
    
    let numOfFrontZeros = 0;
    let writePointer = 0;

    nums.forEach((num, index)=> {

        if (
            num === 0
            && index < (nums.length - numOfFrontZeros)
        ) {
            numOfFrontZeros++;
        }
        else {
            nums[writePointer] = nums[index];
            writePointer++;
        }

        if (index >= (nums.length - numOfFrontZeros)) {
            nums[index] = 0;
        }

    })
};

const array = [0,1, 0, 1];
moveZeroes(array);
console.log(array);
// [1,3,12,0,0]