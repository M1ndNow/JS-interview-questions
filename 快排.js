function quickSort(arr, start, end) {
  if (start >= end) return;
  let left = start;
  let right = end;
  let p = arr[start];

  console.log(`left:${left}, right:${right}, p:${p}, arr:${arr}`);
  while (left < right) {
    // 从右往左
    while (right > left && arr[right] >= p) {
      right--;
    }
    if (left < right) {
      arr[left] = arr[right];
      left++;
      console.log(`left:${left}, right:${right}, p:${p}, arr:${arr}`);
    }
    // 从左往右
    while (left < right && arr[left] <= p) {
      left++;
    }
    if (left < right) {
      arr[right] = arr[left];
      right--;
      console.log(`left:${left}, right:${right}, p:${p}, arr:${arr}`);
    }
  }
  arr[left] = p;
  quickSort(arr, start, left - 1);
  quickSort(arr, right + 1, end);
}

let arr = [8, 1, 56, 5, 4, 12, 0];
quickSort(arr, 0, arr.length - 1);

console.log(arr);
