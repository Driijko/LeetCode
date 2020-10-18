/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    
    let currentIndex = 0;
    let lenRowOfVal = 1;

    while (currentIndex < nums.length) {
        if (nums[currentIndex] === val) {
            while (nums[currentIndex + lenRowOfVal] === val && nums[currentIndex + lenRowOfVal] < nums.length) {
                lenRowOfVal++;
            }
            nums.splice(currentIndex, lenRowOfVal);
        }
        currentIndex++;
    }

    return nums.length;

};

// const nums = [0,1,2,2,3,0,4,2];
const nums = [0];

const val = 0;

console.log(removeElement(nums, val));
console.log(nums);