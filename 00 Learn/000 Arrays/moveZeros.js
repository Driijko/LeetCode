/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    if (nums === null) {
        return;
    }
    
    // let numOfZeros = 0;
    let writePointer = 0;

    nums.forEach((num, index)=> {

        if (num !== 0) {
            nums[writePointer] = nums[index];
            writePointer++;
        }
    })

    for (let i = writePointer ; i < nums.length ; i++) {
        nums[i] = 0;
    }
};

const array = [0,0,1, 0, 1, 43, 62, 12, 0, 19];
moveZeroes(array);
console.log(array);
// [1,3,12,0,0]