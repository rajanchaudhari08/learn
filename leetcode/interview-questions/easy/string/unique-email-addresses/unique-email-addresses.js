/**
 * Counts unique valid email addresses after normalization.
 * @param {string[]} emailList - The list of raw email addresses.
 * @returns {number} - Total number of unique valid addresses.
 */

const countUniqueEmails = (emailList) => {
  const uniqueEmailSet = new Set();

  for (const emailEntry of emailList) {
    const [localName, domainName] = emailEntry.split("@");

    const filteredLocal = localName.split("+")[0].replaceAll(".", "");
    const validEmail = `${filteredLocal}@${domainName}`;

    uniqueEmailSet.add(validEmail);
  }

  return uniqueEmailSet.size;
};

console.log(
  countUniqueEmails([
    "john.doe@leetcode.com",
    "john.smith@leetcode.com",
    "chris.lee@leetcode.com",
  ])
);

/**
 * Results: 3
 */
