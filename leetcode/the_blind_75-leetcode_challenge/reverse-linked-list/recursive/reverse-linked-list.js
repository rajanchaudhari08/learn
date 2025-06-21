/**
 * Reverses a singly linked list recursively.
 * @param {ListNode} head - Head of the singly linked list.
 * @returns {ListNode} - New head of the reversed list.
 */

const reverseListRecursive = (head) => {
  if (head === null || head.next === null) return head;

  const reversedHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return reversedHead;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n) [Call Stack]
 */
