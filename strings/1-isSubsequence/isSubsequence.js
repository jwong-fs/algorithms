// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (seq, str) => {
	let strIdx = 0
	let seqIdx = 0

	while (seqIdx < seq.length && strIdx < str.length) {
		if (str[strIdx] === seq[seqIdx]) {
			seqIdx++
        }
        strIdx++
	}

	return seqIdx === seq.length
};

const isSubsequenceDraft = (seq, str) => {
	if (seq.length > str.length) {
		return false
	}
	let strIdx = 0
	let seqIdx = 0
	let matches = 0

	while (seqIdx < seq.length && strIdx < str.length) {
		if (str[strIdx] === seq[seqIdx]) {
			seqIdx++
			strIdx++
			matches++
		} else {
			strIdx++
		}
	}

	if (matches === seq.length) {
		return true
	} else {
		return false
	}
};

// O(n+m) time where n is the string length and m is the sequence length; O(1) space

module.exports = isSubsequence;