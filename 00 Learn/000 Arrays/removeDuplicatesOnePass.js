/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let length = 1;
    let lastNum = nums[0];

    for (let i = 1 ; i < nums.length ; i++) {

        if (nums[i] !== lastNum) {
            lastNum = nums[i];
            nums[length] = nums[i];
            length++;
        }
    }

    return length;
};

const array = [0, 0, 1, 1, 2, 2, 2, 3];
console.log(removeDuplicates(array));
console.log(array);
