var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0),
        q = l1,
        v = l2,
        curr = dummyHead;
    while (q !== null || v !== null) {
        if (q && v) {
            if ( q.val !== null && v.val !== null) {
                if (q.val <= v.val) {
                    attachNode(curr, q);
                } else {
                    attachNode(curr, v);
                }
            } else if (q.val !== null) {
                attachNode(curr, q);
            } else {
                attachNode(curr, v);
            }
        } else if (q) {
            attachNode(curr, q);
        } else {
            attachNode(curr, v);
        }    
    }
    return dummyHead.next;
};

function attachNode(curr, value) {
    curr.next = new ListNode(value.val);
    curr = curr.next;
    value = value.next;
    return curr;
}