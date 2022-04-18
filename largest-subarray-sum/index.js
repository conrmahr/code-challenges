// https://buttondown.email/cassidoo/archive/dreams-become-reality-when-we-put-our-minds-to-it/
// Given an unsorted array of integers and a number n, find the subarray of length n that has the largest sum.

// Example:

// $ largestSubarraySum([3,1,4,1,5,9,2,6], 3)
// $ [9, 2, 6]

const largestSubarraySum = (array, n) => {
    let [max, current, output] = [0, 0, []];
      
    for (let i = 0; i < array.length; i++) {
      let subArray = [...array.slice(i, n + i)];
      current = subArray.reduce((a, b) => a + b, 0);
      
      if (current > max) {
        [max, output] = [current, subArray];
      }
    }
  
    return output;
  };
  
  console.log(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3));
  // [9, 2, 6]
  
  console.log(largestSubarraySum([1, 3, 4, 6, 5, 7, 8, 9], 5));
  // [6, 5, 7, 8, 9]
  
  console.log(largestSubarraySum([1, 2, 3], 3));
  // [1, 2, 3]
  
  console.log(largestSubarraySum([], 3));
  // []