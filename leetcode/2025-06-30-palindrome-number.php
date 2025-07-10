<?php
/**
 * LeetCode Problem: Palindrome Number
 * Difficulty: Easy
 * Solved: 30 June 2025
 * Language: PHP
 * Link: https://leetcode.com/problems/palindrome-number/description/
 * Description: 
 * 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * A palindrome is a number that reads the same backward as forward.
 * 
 * Example:
 * Input: x = 121
 * Output: true
 * LeetCode Problem: Palindrome Number
 * Difficulty: Easy
 * 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * A palindrome is a number that reads the same backward as forward.
 * 
 * Example:
 * Input: x = 121
 * Output: true
 */

 /**
 * ✅ Approach:
 * 1. Return false for negative numbers.
 * 2. return false for numbers that end with 0 unless the number is 0.
 * 3. return true for single digit numbers.
 * 2. Convert number to string.
 * 3. Use two pointers to check for palindrome.
 */
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        // handle edge cases
        // numbers ending with 0 are not palindromes except for 0 itself
        if($x < 0 || ($x % 10 === 0 && $x !== 0)) return false;

        //negative numbers are not palindromes
        if($x < 0) return false;

        // single digit numbers are palindromes
        if($x < 10) return true;
        // convert the number to string and check if it is a palindrome.
        $str = str_split((string)$x);
        // initialize two pointers, one at the start and one at the end of the string.
        $left = 0;
        $right = count($str) - 1;
        // compare characters from both sides until the pointers meet.
        while($left < $right){
            // if characters at the pointers are not equal, return false.
            if($str[$left] !== $str[$right]) return false;
            // move the pointers towards the center of the string.
            $left++;
            $right--;
        }

        return true;
        
    }
}