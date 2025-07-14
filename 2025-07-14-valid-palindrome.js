/*
 * Valid Palindrome Problem:
 * -------------------------
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
    //1. normalize the string to lower case and filter out non-alphanumeric characters.
    const normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    //2. initialize two pointers.
    let left = 0, right = normalizedStr.length - 1;
    //3. iterate the string from both sides
    while(left < right){
        if(normalizedStr[left] !== normalizedStr[right]) return false;
        left++;
        right--;
        return true;
    }

}
