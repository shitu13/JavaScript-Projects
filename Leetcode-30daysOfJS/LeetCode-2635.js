///  2635. Apply Transform Over Each Element in Array
//// Approach 1

var map = function(arr, fn) {
    let ansArr = [];

    for(const i in arr){
        ansArr.push(fn(arr[i], Number(i)));
    }
    return ansArr;
    
};


//// Approach 2

var map = function(arr, fn) {
    return arr.map(fn);
};