<?php
class Solution {
    /**
     * SORT COLORS (Dutch National Flag Problem)
     * 
     * Given an array containing only 0s, 1s, and 2s, sort the array in-place
     * so that all 0s come first, then 1s, then 2s.
     * 
     * Approach: Three-pointer technique (Dutch National Flag Algorithm)
     * - low: tracks the end of 0s section
     * - mid: processes current element  
     * - high: tracks the start of 2s section
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    function sortColors(&$nums) {
        $low = 0;
        $mid = 0; 
        $high = count($nums) - 1;

        // process each elements until mid crosses high
        while($mid <= $high) {
            //1. if mid is 0, swap it with low and increment both.
            if($nums[$mid] == 0) {
                // Swap
                $temp = $nums[$low];
                $nums[$low] = $nums[$mid];
                $nums[$mid] = $temp;

                // Increment
                $low++;
                $mid++;

            }
            //2. if mid is 1, leave the element and move mid one step ahead.
            else if($nums[$mid] == 1) {
                $mid++;
            }
            //3. if mid is 2, swap it with high and decrement high.
            else {
                // Swap
                $temp = $nums[$mid];
                $nums[$mid] = $nums[$high];
                $nums[$high] = $temp;
                // Decrement
                $high--;
            }

        }

        return $nums;
    }
}