### Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

##### Example 1:
```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

##### Example 2:
```
Input: l1 = [], l2 = []
Output: []
```

##### Example 3:
```
Input: l1 = [], l2 = [0]
Output: [0]
``` 

##### Constraints:

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `l1` and `l2` are sorted in **non-decreasing** order.

#### Solutions 

##### Solution 1:
``The highest performing JavaScript solution in 'mergeTwoLists'.js, uses an iterative bread-first approach, beating 99.3% of all previous Leetcode submissions.``

##### Solution 2:
``The JavaScript solution in mergeTwoListsIBF.js uses an iterative bread-first approach, beating 96.9% of all previous Leetcode submissions.``