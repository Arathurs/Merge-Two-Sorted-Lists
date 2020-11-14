/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* This solution beats 96.90% of JavaScript online submissions for
   Merge Two Sorted Lists on LeetCode */
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0),
        q = l1,
        v = l2,
        curr = dummyHead;
    
    while (q !== null || v !== null) {
        let a = q && q.val !== null ? q : false,
            b = v && v.val !== null ? v : false;
        if ( a !== false && b !== false) {
            if (a.val <= b.val) {
                curr.next = new ListNode(a.val);
                curr = curr.next;
                q = q.next;
            } else {
                curr.next = new ListNode(b.val);
                curr = curr.next;
                v = v.next;  
            }
        } else if (b !== false) {
            curr.next = new ListNode(b.val);
            curr = curr.next;
            v = v.next;
        } else if (a !== false) {
            curr.next = new ListNode(a.val);
            curr = curr.next;
            q = q.next;
        }
    }
    return dummyHead.next;
};