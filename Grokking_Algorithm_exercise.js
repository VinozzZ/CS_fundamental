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


//CHAPTER 2

function findMin(arr){
  var min = arr[0];
  var minIndex = 0;
  for(let i of arr){
    if(i < min){
      min = i;
      minIndex = arr.indexOf(i);
    }
  }
  return minIndex;
}

function slection_sort(arr){
  var newArr = [];
  var arrlength = arr.length;
  for(let i = 0; i < arrlength; i++){
    var minIndex = findMin(arr)
    newArr.push(parseInt(arr.splice(minIndex, 1).toString()));
  }
  return newArr;
}

console.log(slection_sort([5, 3, 6, 2, 10]))

//chapter 3

  //leanier search
function look_for_key(main_box){
  var pile = main_box.make_a_pile_to_look_through();
  while(pile.length > 0){
    let box = pile.grab_a_box();
    for(let item of box){
      if(item.is_a_box()){
        pile.push(item)
      }else if(item.is_a_key()){
        console.log("found the key!");
      }
    }
  }
}

 //recursion
function look_for_key_recur(box){
  for(let item of box){
    if(item.is_a_box()){
      look_for_key(item);
    }else if(item.is_a_key()){
      console.log("found the key!")
    }
  }
}