<?php 
/**
 * LeetCode Problem: 2SUM
 * Difficulty: Easy
 * Solved: 21 Jul 2025
 * Language: PHP
 * Link: https://leetcode.com/problems/2sum/description/
 * Description: 
 * 
 * 
 * Approach:
 * I used the Two Pointers approach to solve the 2SUM problem.
 * - The solution begins by creating an indexed array to keep track of the original indices of the  elements.
 * * - The array is then sorted based on the values of the elements, which allows for efficient searching.
 * * - Two pointers are initialized: one at the start (left) and one at the end (right) of the sorted array.
 * * - The algorithm iterates through the array, calculating the sum of the elements at the two pointers.
 * * - If the sum is less than the target, the left pointer is moved to the right to increase the sum.
 * * - If the sum is greater than the target, the right pointer is moved to the left to decrease the sum.
 * * - If the sum equals the target, the indices of the two elements are returned.
 * * This method ensures that the solution is efficient, with a time complexity of O(n log n) due to sorting,
 * 
 **/
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        // keep original indexing
        $indexed = [];
        foreach($nums as $i => $val) {
            $indexed[] = ['index'=>$i, 'value' => $val];
        }
        // sort array by value in ascending order
        usort($indexed, fn($a, $b) => $a['value'] <=> $b['value']);

        //initialize two pointers.
        $left = 0; 
        $right = count($nums) - 1;

        //loop through array
        while($left < $right) {
            $sum = $indexed[$left]['value'] + $indexed[$right]['value'];
            if($sum < $target) {
                $left++;
            }else if($sum> $target) {
                $right--;
            }else {
                return [$indexed[$left]['index'],$indexed[$right]['index']];
            }

        }
        return [];
    }
}
