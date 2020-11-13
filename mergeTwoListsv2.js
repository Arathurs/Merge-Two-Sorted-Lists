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
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0),
        q = l1,
        v = l2,
        curr = dummyHead;
    
    while (q !== null || v !== null) {
        console.log('q and v', q, v);
        let a = q !== null && q.val !== undefined && q.val !== null ? q : false,
            b = v !== null && v.val !== undefined && v.val !== null ? v : false;
        if ( a !== false && b !== false) {
            if (a.val <= b.val) {
                console.log('Current node from first list is lesser than current node from second list.');
                console.log('a.val', a.val);
                curr.next = new ListNode(a.val);
                curr = curr.next;
                q = q.next;
            } else {
                console.log('Current node from first list is greater than current node from second list.');
                console.log('b.val', b.val);
                curr.next = new ListNode(b.val);
                curr = curr.next;
                v = v.next;  
            }
        } else if (b !== false) {
            console.log('b !== false');
            console.log('b.val', b.val)
            curr.next = new ListNode(b.val);
            curr = curr.next;
            v = v.next;
            //console.log(curr);
        } else if (a !== false) {
            console.log('a !== false');
            console.log('a.val', a.val)
            curr.next = new ListNode(a.val);
            curr = curr.next;
            q = q.next;
            //console.log(curr);
            break;
        }
    }
    return dummyHead.next;
};