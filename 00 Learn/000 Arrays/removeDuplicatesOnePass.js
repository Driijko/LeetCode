/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums === null) {
        return 0;
    }

    let writePointer = 1;

    for (let readPointer = 1 ; readPointer < nums.length ; readPointer++) {

        if (nums[readPointer] !== nums[readPointer - 1]) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    return writePointer;
};

const array = [0, 0, 1, 1, 2, 2, 2, 3];
console.log(removeDuplicates(array));
console.log(array);
