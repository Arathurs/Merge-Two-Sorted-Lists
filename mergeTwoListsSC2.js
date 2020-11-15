var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0),
        q = l1,
        v = l2,
        curr = dummyHead;
    while (q !== null || v !== null) {
        if (q && v) {
            if ( q.val !== null && v.val !== null) {
                if (q.val <= v.val) {
                    curr.next = new ListNode(q.val);
                    curr = curr.next;
                    q = q.next;        
                } else {
                    curr.next = new ListNode(v.val);
                    curr = curr.next;
                    v = v.next;
                }
            } else if (q.val !== null) {
                curr.next = new ListNode(q.val);
                curr = curr.next;
                q = q.next;
            } else {
                curr.next = new ListNode(v.val);
                curr = curr.next;
                v = v.next;
            }
        } else if (q) {
            curr.next = new ListNode(q.val);
            curr = curr.next;
            q = q.next;
        } else {
            curr.next = new ListNode(v.val);
            curr = curr.next;
            v = v.next;
        }    
            
    }
    return dummyHead.next;
};