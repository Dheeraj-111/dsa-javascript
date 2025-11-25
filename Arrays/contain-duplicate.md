# Contains Duplicate

**Difficulty:** Easy  
**Topic:** Arrays, Hash Table  
**Date Solved:** 25/11/2024  
**Source:** [LeetCode #217](https://leetcode.com/problems/contains-duplicate/)

---

## Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

---

## Examples

### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
Explanation: The element 1 occurs at indices 0 and 3.
```

### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct.
```

### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

---

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`


## Approaches

### Approach 1: Brute Force
- Time: O(n²)
- Space: O(1)
- Use nested loops to compare

### Approach 2: Sorting 
- Time: O(n log n)
- Space: O(1)
- Sort and check adjacent elements

### Approach 3: Hash Set
- Time: O(n)
- Space: O(n)
- Track seen numbers in a Set

### Approach 4: One Liner
- Time: O(n)
- Space: O(n)
- Compare Set size with array length