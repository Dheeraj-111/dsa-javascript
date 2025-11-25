// Approach: Sorting

const checkDuplicate = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(checkDuplicate([1, 2, 3, 1]));

// Approach: Using Set

const checkDuplicateSet = (arr) => {
    const numSet = new Set();
    for (let num of arr) {
        if(numSet.has(num)){
            return true;
        }
        numSet.add(num)
    }
    return numSet.size !== arr.length
}
console.log(checkDuplicateSet([1, 2, 3, 4]));

// Approach: one-liner using Set

const containsDuplicate = (arr) => new Set(arr).size !== arr.length;
console.log(containsDuplicate([1, 1, 1, 3, 3]));
