<?php

/**
 * 151. Reverse Words in a String
*  Given an input string s, reverse the order of the words.
* A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
*  Return a string of the words in reverse order concatenated by a single space.

*  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 * @param {string} s
 * @return {string}
 */
class Solution {
    function reverseString($s) {
        // clean the string and convert it to an array of words
        // clean the string
        $words = [];
        $currentWord = '';
        //1. loop through string
        for($i= 0; $i< strlen($s); $i++) {
            //append currnet character to the current word if not a white space
            if($s[$i] !== ' '){
                $currentWord .=$s[$i];
            }
            else {
                if(strlen($currentWord) > 0){
                    array_push($words, $currentWord);
                    $currentWord = '';
                }
            }
        }


        // push the last word to the words array
        if(strlen($currentWord) > 0 ) {
            array_push($words, $currentWord);
            $currentWord = ''; 
        }

        // reverse the words array using two pointers approach
        $left = 0;
        $right = count($words) - 1; 

        while($left < $right) {
            $temp = $words[$left];
            $words[$left] = $words[$right];
            $words[$right] = $temp;

            $left++;
            $right--;
        }

        return implode(' ',$words);

    }
}