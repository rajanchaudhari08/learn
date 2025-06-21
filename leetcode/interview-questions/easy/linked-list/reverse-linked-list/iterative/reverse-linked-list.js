/**
 * Reverses a singly linked list iteratively.
 * @param {ListNode} head - Head of the singly linked list.
 * @returns {ListNode} - New head of the reversed list.
 */

const reverseListIterative = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

/**
 * Results:
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
