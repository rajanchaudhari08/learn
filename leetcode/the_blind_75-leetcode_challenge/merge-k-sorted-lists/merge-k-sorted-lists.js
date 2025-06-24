// Definition for singly-linked list
function ListNode(value, next = null) {
  this.value = value;
  this.next = next;
}

/**
 * Merges two sorted linked lists.
 * @param {ListNode} firstList
 * @param {ListNode} secondList
 * @returns {ListNode}
 */

const mergeTwoLists = (firstList, secondList) => {
  const sentinel = new ListNode(-1);
  let traversalNode = sentinel;

  while (firstList && secondList) {
    if (firstList.value <= secondList.value) {
      traversalNode.next = firstList;
      firstList = firstList.next;
    } else {
      traversalNode.next = secondList;
      secondList = secondList.next;
    }
    traversalNode = traversalNode.next;
  }

  traversalNode.next = firstList || secondList;
  return sentinel.next;
};

/**
 * Merges k sorted linked lists using divide and conquer.
 * @param {ListNode[]} lists
 * @returns {ListNode}
 */
const mergeKSortedLists = (sortedLinkedlists) => {
  if (!sortedLinkedlists.length) return null;

  while (sortedLinkedlists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < sortedLinkedlists.length; i += 2) {
      const leftSubList = sortedLinkedlists[i];
      const rightSubList =
        i + 1 < sortedLinkedlists.length ? sortedLinkedlists[i + 1] : null;
      mergedLists.push(mergeTwoLists(leftSubList, rightSubList));
    }

    sortedLinkedlists = mergedLists;
  }

  return sortedLinkedlists[0];
};

const createLinkedList = (array) => {
  const headNode = new ListNode();
  let currentNode = headNode;
  for (const num of array) {
    currentNode.next = new ListNode(num);
    currentNode = currentNode.next;
  }
  return headNode.next;
};

const printLinkedList = (head) => {
  const result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result);
};

const firstLinkedList = createLinkedList([1, 4, 5]);
const secondLinkedList = createLinkedList([1, 3, 4]);
const thirdLinkedList = createLinkedList([2, 6]);

const result = mergeKSortedLists([
  firstLinkedList,
  secondLinkedList,
  thirdLinkedList,
]);
printLinkedList(result);

/**
 * Results: [1, 1, 2, 3, 4, 4, 5, 6]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
