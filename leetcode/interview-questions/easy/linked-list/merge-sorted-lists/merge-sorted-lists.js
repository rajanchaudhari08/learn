/**
 * Definition for singly-linked list node.
 * @constructor
 * @param {number} value - Value of the node.
 * @param {ListNode|null} next - Reference to the next node.
 */

function ListNode(value, next) {
  this.value = value === undefined ? 0 : value;
  this.next = next === undefined ? null : next;
}

/**
 * Merges two sorted singly linked lists into a single sorted linked list.
 * @param {ListNode} firstList - Head of the first sorted linked list.
 * @param {ListNode} secondList - Head of the second sorted linked list.
 * @returns {ListNode} - Head of the merged sorted linked list.
 */

const mergeTwoLists = function (firstList, secondList) {
  const sentinelNode = new ListNode(-1);
  let traversalNode = sentinelNode;

  while (firstList !== null && secondList !== null) {
    if (firstList.value <= secondList.value) {
      traversalNode.next = firstList;
      firstList = firstList.next;
    } else {
      traversalNode.next = secondList;
      secondList = secondList.next;
    }
    traversalNode = traversalNode.next;
  }

  traversalNode.next = firstList !== null ? firstList : secondList;

  return sentinelNode.next;
};

const createLinkedList = (array) => {
  let headNode = new ListNode();
  let currentNode = headNode;
  for (const value of array) {
    currentNode.next = new ListNode(value);
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

const firstLinkedList = createLinkedList([1, 2, 4]);
const secondLinkedList = createLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(firstLinkedList, secondLinkedList);
printLinkedList(mergedList);

/**
 * Results: [ 1, 1, 2, 3, 4, 4 ]
 */
