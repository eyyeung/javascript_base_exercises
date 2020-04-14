function range(start,end){
    // base case
    if (start===end){
        return [];
    }

    // recursion
    let r = range(start,end-1);
    r.push(end-1);
    return r
};

console.log(range(2,4))

function sumRec(arr){
    // base case
    if (arr.length===0){
        return 0;
    }

    // recursion
    let sum = sumRec(arr.slice(0,arr.length-1));
    sum += arr.pop()
    return sum;
};

console.log(sumRec([10,0,1,2,3,4,5]))


// version 1 of exponent
function exponent(base,exp){
    if (exp===0){
        return 1;
    }

    return base* exponent(base,exp-1);
};

console.log(exponent(2,2));


// version 2 of exponent
function exp(b,n){
    if (n===0){
        return 1;
    }

    if (n%2===0){
        return exp(b,n/2)**2
    }
    else{
        return b*(exp(b,(n-1)/2)**2)
    }
};

console.log(exp(4,2));

function fibonacci(n){
    if (n<3){
        return [0,1].slice(0,n);
    }

    let seq = fibonacci(n-1);
    seq.push(seq[seq.length-1]+seq[seq.length-2]);
    return seq;
};

console.log(fibonacci(4))


//return the index of the target in the array, if not found, then return -1
function bsearch(arr,target){
    //pop will pop out the last element of the array
    let val=arr.pop()
    //if match then return the index
    if (val==target){
        return arr.length
    }
    //if the last value isn't the target and there is not more element, then not found and return -1
    // base case
    else if (arr.length===0){
        return -1
    }
    //recursion
    else {
        return bsearch(arr,target)
    }
};

console.log(bsearch([0,1,2,3,4,5],3));

function merge(left, right) {
    const merged = [];
  
    while (left.length > 0 && right.length > 0) {
      let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
      merged.push(nextItem);
    }
  
    return merged.concat(left, right);
}
  
function mergeSort(array) {
    if (array.length < 2) {
      return array;
    } else {
      const middle = Math.floor(array.length / 2);
  
      const left = mergeSort(array.slice(0, middle));
      const right = mergeSort(array.slice(middle));
  
      return merge(left, right);
    }
}

console.log(mergeSort([12,11,13,5,6,7]));
