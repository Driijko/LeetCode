/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let temp;
    let replace;
    let origNums1Count = 0;
    let nums2Index = 0;

    for (let i = 0 ; i < nums1.length ; i++) {
        if (origNums1Count < m && nums2Index < n) {
            if (nums1[i] <= nums2[nums2Index]) {
                origNums1Count++;
            }
            else {

                replace = nums1[i];
                nums1[i] = nums2[nums2Index];
                nums2Index++;

                for (let j = i + 1 ; j < nums1.length ; j++) {
                    temp = nums1[j];
                    nums1[j] = replace;
                    replace = temp;
                }
            }
        }
        else if (nums2Index < n) {
            nums1[i] = nums2[nums2Index];
            nums2Index++;
        }
        else if (origNums1Count < m) {
            origNums1Count++;
        }
    }
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6]; 

// const nums1 = [1, 2, 4, 0];
// const nums2 = [3];

merge(nums1, 3, nums2, 3);
console.log(nums1)