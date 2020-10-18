/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let currentIndex = 0;
    let currentVal = null;
    let lenRowOfDuplicates = 1;

    while (currentIndex < nums.length) {

        if (nums[currentIndex] !== currentVal) {
            currentVal = nums[currentIndex];
            currentIndex++;
        }
        else if (nums[currentIndex] === currentVal) {

            while (
                nums[currentIndex + lenRowOfDuplicates] === currentVal
                && (currentIndex + lenRowOfDuplicates) < nums.length
            ) {
                lenRowOfDuplicates++;
            }
            nums.splice(currentIndex, lenRowOfDuplicates);
            lenRowOfDuplicates = 1;
            currentVal = null;
        }
    }

    return nums.length;
};

// const nums = [0,0,1,1,1,2,2,3,3,4];
const nums = [1, 1, 1, 1, 1, 2, 3, 5, 5, 5, 5, 5, 5];
console.log(removeDuplicates(nums));
console.log(nums);