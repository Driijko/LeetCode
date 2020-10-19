/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if (nums === null) {
        return;
    }
    
    let numOfZeros = 0;
    let writePointer = 0;

    nums.forEach((num, readPointer)=> {

        if (num === 0) {
            numOfZeros++;
        }
        else {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }

        if (readPointer >= (nums.length - numOfZeros)) {
            nums[readPointer] = 0;
        }
    })
};

const array = [0,1,0,3,12];
moveZeroes(array);
console.log(array);
// [1,3,12,0,0]