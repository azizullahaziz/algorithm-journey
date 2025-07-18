/*
 * LeetCode Problem: 3SUM
 * Difficulty: Easy
 * Solved: 28 June 2025
 * Language: JavaScript
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
var isPalindrome = function(s) {
    //1. initialize two pointers.
    let left = 0; right = s.length - 1;
    //2. iterate throught the string
    while(left < right) {
        // skip space and non-alphanumeric characters
        while(left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;

        while(left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;

        // compare characters in lower case
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;

};

// another solution 
var isPalindrome2 = function(s) {
        //1. initialize two pointers
    let left = 0 , right = s.length -1;
    while (left < right){
        //2. skip non-numeric & non-alphabet characters.
        while(left < right && !/[a-zA-Z0-9]/.test(s[left])){
            left++
        }
        while(left < right && !/[a-zA-Z0-9]/.test(s[right])){
            right--
        }
        //3. compare the characters and return false if not the same.
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false
        }
        left++
        right--
    }
    return true;
}