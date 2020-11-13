var mergeTwoLists = function(l1, l2) {
    //l1.next = l1;
    //l1.val = 9;
    //console.log(l1,l2);
    let q = l1,
        v = l2, ml;
    while (q !== undefined || v !== undefined) {
        console.log('q and v', q, v);
        let a = q !== undefined && q.val !== undefined && q.val !== null ? q : false,
            b = v !== undefined && v.val !== undefined && v.val !== null ? v : false;
        if ( a !== false && b !== false) {
            if (a.val <= b.val) {
                console.log('Current node from first list is lesser than current node from second list.');
                q = q.next;
            } else {
                console.log('Current node from first list is greater than current node from second list.');
                //console.log('else if both numbers',q,v)
                //console.log('after both numbers', q.next);
                //const nextNodes = q.next;
                //console.log('after both numbers', q.next, nextNodes);
                console.log('a.val, a.next', a.val, a.next);
                console.log('a', a, v, l1);
                const currentNode = a;
                console.log('currentNode', currentNode);
                console.log('char to be placed', b.val);
                console.log('original char', a.val);
                a.val = b.val;
                a.next = null;
                a.next = currentNode;
                console.log('a1',a, l1);
                //console.log(a.next);
                //a = a.next;
                //a.next = nextNodes;
                
                console.log('a.val', a.val);
                console.log('a.next', a.next);
                a = a.next;
                //q.next = nextNodes;
                b = b.next;
                
                
            }
        } else if (b !== false) {
            console.log('b !== false');
            //q = v;
        } else if (a !== false) {
            console.log('a !== false');
            break;
        }
    }
    return l1;
};