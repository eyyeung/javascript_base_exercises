// Array function to return a matrix with unique element (a set)
Array.prototype.uniq = function(){
    let narr=[];
    this.forEach((ele)=>{
        if (!narr.includes(ele)){
            narr.push(ele)
        };
    });
    return narr;
};

// Return the index of the pairs that add up to 0
console.log("Testing Array#uniq")
let dup = [1,2,2,3,3,3,5,-1,-1];
console.log("original: ",dup);
console.log("unique: ",dup.uniq());

Array.prototype.twoSum = function() {
    const pairs = [];
  
    for (let i = 0; i < this.length; i++) {
      for (let j = (i + 1); j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          pairs.push([i, j]);
        }
      }
    }
  
    return pairs;
};
console.log("Testing Array#twoSum")
let ts = [1,2,3,4,-1,-2,-3,-4];
console.log("original: ",ts);
console.log("index of the pairs summing to 0: ",ts.twoSum());

// return the matrix tranposed
Array.prototype.transpose = function(){
    let nmatrix=[];
    for (let i=0;i<this.length;i++){
        for (let j=0;j<this[i].length;j++){
            if (i===0){
                nmatrix.push([])
            };
            nmatrix[j][i]=(this[i][j])
        };
    };
    return nmatrix;
};

console.log("Testing Array#transpose")
let tmatrix=[[11,12,13],[21,22,23]];
console.log("original: ",tmatrix);
console.log("transposed: ",tmatrix.transpose());

const TESTCASE = [0,1,2,10,20];

Array.prototype.myEach = function (callback){
    for (let i=0;i<this.length;i++){
        callback(this[i]);
    }
};

// testing myEach
console.log("Testing myEach: ")
TESTCASE.myEach((num)=>{
    console.log(`the number is ${num}`);
});


Array.prototype.myMap = function(callback){
    let newarr=[];
    this.myEach(ele=>{
        newarr.push(callback(ele));
    });
    return newarr;
};

console.log("Tesitng myMap: ");
console.log(TESTCASE.myMap(num=>num*num));

// return an accumulator by applying the callback to each element and return the accumulator
Array.prototype.myReduce= function(callback,initialValue){
    if (!initialValue){
        // use shift because want to set the initial value to be the first element and don't want to reuse that element
        // shift will 'pop' out the first element
        initialValue= this.shift();
    };
    let acc = initialValue;
    this.myEach((num)=>{
        acc = callback(acc,num)
    });
    return acc;
};

// testing my Reduce
console.log("Testing myReduce: ")
console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }));

// with starting value of 25
console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;}, 25));

Array.prototype.bubbleSort = function(){
    for (let i=0;i<this.length;i++){
        for (let j=0;j<this.length-i;j++){
            if (this[j] > this[j+1]){
                [this[j],this[j+1]]= [this[j+1], this[j]];
            };
        }
    }
    return this;
};

console.log([9,1,2,7,-4,-9,3,4,4].bubbleSort())
