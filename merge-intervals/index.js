// https://buttondown.email/cassidoo/archive/dreams-become-reality-when-we-put-our-minds-to-it/
// Given an array of intervals, merge the overlapping intervals, and return an array of the resulting intervals.
  
// $ mergeIntervals([[1,4],[2,6],[8,10],[15,20]])
// $ [[1,6],[8,10],[15,20]]

// $ mergeIntervals([[1,2],[2,7]])
// $ [[1,7]]


const mergeIntervals = (arrays) => {
  let result = [];
  
  arrays.forEach((value) => {
    const count = result.length;
    if (count) {
      if (result[count - 1][1] >= value[0]) {
        result[count - 1][1] = Math.max(result[count - 1][1], value[1]);
      } else {
        result.push(value);
      }
    } else {
      result.push(value);
    }
  });
  return result;
}


console.log(mergeIntervals([[1,4],[2,6],[8,10],[15,20]]));
// [[1,6],[8,10],[15,20]]

console.log(mergeIntervals([[1,2],[2,7]]));
// [[1,7]]