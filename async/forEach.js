const arr = [1, 2, 3, 4, 5, 6];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
