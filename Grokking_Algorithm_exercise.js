//CHAPTER 1

function binary_search(arr, target){
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    console.log(low)
    var mid = Math.round((low + high) / 2);
    var guess = arr[mid];
    if(guess == target){
      return mid;
    }
    if(guess < target){
      low = mid + 1;
    }
    if(guess > target){
      high = mid - 1;
    }
  }
  return null;
}

console.log(binary_search([1, 3, 5, 7, 9], 3))