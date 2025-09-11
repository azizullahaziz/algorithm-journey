/**
 * 151. Reverse Words in a String
*  Given an input string s, reverse the order of the words.
*  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
*  Return a string of the words in reverse order concatenated by a single space.

*  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    // clean the string
    const words = [];
    let currentWord = '';
    for(let i = 0; i < s.length; i++) {
        // if current element is not space add it to current word. 
        if(s[i] != ' ') {
            currentWord += s[i];
        }
        else { // if reached to a space, the current word is ended and should be pushed to words array.
            
            // make sure current word is not empty
            if(currentWord.length > 0) {
                words.push(currentWord);
                currentWord = '';
            }
        }
    }
    // push the last word to the words array
    if(currentWord.length > 0) {
        words.push(currentWord);
        currentWord = '';
    }

    // revers the words array using two pointers approach
    let left = 0;
    let right = words.length - 1;

    while(left < right) {
        [words[left], words[right]] = [words[right], words[left]];

        // move the pointers inward.
        left++
        right--
    }

    return words.join(' ');

    
}