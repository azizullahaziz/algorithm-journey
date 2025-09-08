/**
 * SORT COLORS (Dutch National Flag Problem)
 * 
 * Problem Statement:
 * Given an array containing only 0s (red), 1s (white), and 2s (blue),
 * sort the array in-place so that all 0s come first, followed by 1s, then 2s.
 * 
 * Approach: Dutch National Flag Algorithm
 * - Use three pointers to partition the array into three sections:
 *   low: tracks the end of the 0s section
 *   mid: processes current element
 *   high: tracks the start of the 2s section
 * - Single pass through the array with O(n) time complexity and O(1) space
 */
function sortColors (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    // process each element until mid crosses high
    while(mid <= high) {
        //1. if mid is 0 swap it with low and increment both
        if(nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        //2. if mid is 1 leave it and increment mid.
        else if(nums[mid] === 1 ) {
            mid++;
        }
        //3. if mid is 2 swap it with high and decrement high.
        else {
            [nums[mid],nums[high]] = [nums[high],nums[mid]];
            high--;
        }
    }

    return nums;
}