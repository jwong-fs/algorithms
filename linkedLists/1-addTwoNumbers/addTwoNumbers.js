// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
    let sumOfLists = new ListNode();
    let l3 = sumOfLists;
    let carryOver = 0;
    while(l1 || l2 || carryOver) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let currSum = val1 + val2 + carryOver;
        if (currSum > 9) {
            carryOver = 1;
            l3.next = new ListNode(currSum - 10);
            l3 = l3.next;
        } else {
            carryOver = 0;
            l3.next = new ListNode(currSum);
            l3 = l3.next;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return sumOfLists.next;
};

// O(n) time; O(n) space

module.exports = addTwoNumbers