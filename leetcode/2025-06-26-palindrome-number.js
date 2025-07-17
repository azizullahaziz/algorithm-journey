/**
 * LeetCode Problem: Palindrome Number
 * Difficulty: Easy
 * Solved: 26 June 2025
 * Language: JavaScript
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
 * 
 * @param {number} x
 * @return {boolean}
 */
/**
 * ✅ Approach:
 * 1. Return false for negative numbers.
 * 2. return false for numbers that end with 0 unless the number is 0.
 * 3. return true for single digit numbers.
 * 2. Convert number to string.
 * 3. Use two pointers to check for palindrome.
 */
var isPalindrome = function(x) {
    //handle edge cases.

    //1. return false for negative numbers
    if(x < 0){
        return false
    }
    //2. if x ends with 0, return false unless x is 0.
    if(x % 10 === 0 && x !== 0) return false;
    //3. if x is one digit number, return true.
    if(x >= 0 && x < 10) return true;


    //2. convert number to string.
    const str = x.toString()
    //3. initialize two pointers
    let left = 0, right = str.length -1;
    //4. check if value at pointer index is not the same return false
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        //5. move inward.
        left++
        right--
    }

    return true
};