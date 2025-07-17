<?php 
/*
 * LeetCode Problem: Valid Palindrome
 * Difficulty: Easy
 * Solved: 17 July 2025
 * Language: PHP
 * Link: https://leetcode.com/problems/valid-palindrome/description/
* Descripton:
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * A palindrome reads the same forward and backward after removing non-alphanumeric characters and normalizing case.
 *
 * Key Points:
 * - Ignore spaces, punctuation, and symbols.
 * - Compare characters case-insensitively.
 * - Efficient solution uses two pointers: one starting at the beginning, one at the end.
 *
 * Examples:
 *   "A man, a plan, a canal: Panama" => true
 *   "race a car"                     => false
 *   " "                              => true (empty or only non-alphanumeric is a palindrome)
 *
 * Approach:
 * - I Use two pointers (left and right) to scan from both ends.
 * - Skip non-alphanumeric characters.
 * - Compare characters in lower case.
 * - If all matching, return true; else, false.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    public function isPalindrome($s) {
        // initialize two pointers.
        $left = 0;
        $right = strlen($s) - 1;
        // loop until the pointers meet.
        while ($left < $right) {
            // skip non-alphanumeric characters.
            while($left < $right && !ctype_alnum($s[$left])) {
                $left++;
            }

            while ($left < $right && !ctype_alnum($s[$right])) {
                $right--;
            }

            // compare characters in lower case.
            if(strtolower($s[$left]) !== strtolower($s[$right])) {
                return false;
            }

            // move the pointers inward.
            $left++;
            $right--;
        }
        // if all characters matched, rerturn true.
        return true;
    }
}