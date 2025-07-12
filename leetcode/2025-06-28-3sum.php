<?php 
/**
 * LeetCode Problem: 3SUM
 * Difficulty: Easy
 * Solved: 28 June 2025
 * Language: PHP
 * Link: https://leetcode.com/problems/3sum/description/
 * Description: 
 *  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *  Notice that the solution set must not contain duplicate triplets.
 *
 *   Example 1:
 *        Input: nums = [-1,0,1,2,-1,-4]
 *        Output: [[-1,-1,2],[-1,0,1]]
 *        Explanation: 
 *           nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 *           nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 *           nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 *           The distinct triplets are [-1,0,1] and [-1,-1,2].
 *           Notice that the order of the output and the order of the triplets does not matter. 
 * 
 * 
 * Approach:
 * - The solution begins by handling edge cases first. This is crucial because it prevents unnecessary computation 
 *      and avoids potential errors or inefficiencies when the input does not meet the minimum requirements 
 *      for a valid solution (e.g., arrays with fewer than three elements).
 * - After addressing edge cases, the main logic utilizes the Two Pointers technique. 
 * - This approach is particularly effective for problems involving sorted arrays and searching for pairs or triplets 
 *      that satisfy a specific condition (such as summing to zero).
 * - The array is first sorted to facilitate efficient duplicate handling and pointer movement.
 * - For each element, the algorithm uses two pointers to scan the remaining part of the array, 
 *      efficiently finding all unique triplets that sum to zero.
 * - Duplicate triplets are avoided by skipping over repeated elements during iteration.
 *
 * This method ensures optimal time complexity compared to brute-force solutions and is widely recognized as the 
 * standard efficient approach for the 3Sum problem.
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function threeSum($nums) {
        $result = [];
        sort($nums);
        for($i = 0; $i < count($nums) - 2; $i++){
            //handle edge cases
            if($nums[$i] > 0) break;
            if($i > 0 && $nums[$i] == $nums[$i - 1]) continue;
            $low = $i + 1;
            $high = count($nums) -1;

            while($low < $high){
                $sum = $nums[$i] + $nums[$low] + $nums[$high];
                // if sum < 0, move forward
                if($sum < 0 ) $low++;
                // if sum > 0, move bakward
                else if($sum > 0 ) $high--;
                else {
                    array_push($result, [$nums[$i],$nums[$low],$nums[$high]]);
                    // Skip duplicates
                    while($low < $high && $nums[$low] == $nums[$low + 1] ) $low++;
                    while($low < $high && $nums[$high] == $nums[$high -1]) $high--;

                    $low++;
                    $high--;

                }
            }
        }
        return $result;
    }
}