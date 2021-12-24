// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as `cinema`, formed from `iceman`.

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false
    }
    let str1Freq = {}
    let str2Freq = {}
    // Loop through str1 and identify frequencies of distinct chars; store in obj1
    for (let char of str1) {
        if (str1Freq[char]) {
            str1Freq[char]++
        } else {
            str1Freq[char] = 1
        }
    }
    
    // Loop through str2 and identify frequencies of distinct chars; store in obj2
    for (let char of str2) {
        if (str2Freq[char]) {
            str2Freq[char]++
        } else {
            str2Freq[char] = 1
        }
    }
    
    // For each key/value pair in obj1, it should match obj2
    for (let key in str1Freq) {
        if (!str2Freq[key]) {
            return false
        }
        if (str2Freq[key] !== str1Freq[key]) {
            return false
        }
    }
    return true
  }

// O(n) time; O(n) space

module.exports = validAnagram


// Refactored improvement

function validAnagramImproved(str1, str2){
    if (str1.length !== str2.length) {
        return false
    }

    let str1Freq = {}

    for (let char of str1) {
        if (str1Freq[char]) {
            str1Freq[char]++
        } else {
            str1Freq[char] = 1
        }
    }
    
    for (let char of str2) {
        if (!str1Freq[char]) {
            return false
        } else {
            str1Freq[char]--
        }
    }
    
    return true
  }