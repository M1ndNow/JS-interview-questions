/* 宏任务与微任务 */
// Promise.resolve().then(() => {
//   console.log("Promise1");
//   setTimeout(() => {
//     console.log("setTimeout2");
//   }, 0);
// });

// setTimeout(() => {
//   console.log("setTimeout1");
//   Promise.resolve().then(() => {
//     console.log("Promise2");
//   });
// }, 0);

/* 快速排序*/
// function quickSort(arr, start, end) {
//   if (start >= end) return;
//   let l = start,
//     r = end,
//     p = arr[end]; // 设定锚定值，此处将最后一个元素作为锚定值，第一个也可

//   while (l < r) {
//     //从左往右遍历，直到找到大于p的值
//     while (l < r && arr[l] <= p) {
//       l++;
//     }
//     if (l < r) {
//       arr[r--] = arr[l];
//     }

//     //从右往左遍历，直到找到小于p的值
//     while (l < r && arr[r] >= p) {
//       r--;
//     }
//     if (l < r) {
//       arr[l++] = arr[r];
//     }
//   }
//   arr[l] = p;
//   quickSort(arr, start, l - 1);
//   quickSort(arr, r + 1, end);
// }
// // let arr = [8, 1, 56, 5, 4, 12, 0];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

/* add(1)(2)(3) */
// function add(x) {
//   return (y) => (z) => x + y + z;
// }
// console.log(add(1)(2)(3));

/*无重复最长子串 */

function longestSubstring(s) {
  let right = -1;
  let set = new Set();
  let len = s.length;
  let res = 0;

  for (let left = 0; left < len; left++) {
    if (left !== 0) {
      set.delete(s.charAt(left - 1));
    }
    while (right + 1 < len && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1));
      right++;
    }
    res = Math.max(res, right - left + 1);
  }
  console.log(res);
}

longestSubstring("abcdefab");
