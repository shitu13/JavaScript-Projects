////// 2634. Filter Elements from Array
///// Approach 1

var filter = function(arr, fn) {
    const res = [];

    for(const i in arr){
        if(fn(arr[i], Number(i))){
            res.push(arr[i])
        }
    }
    return res;
};



///// Approach 2


var filter = function(arr, fn) {
    const res = arr.filter(fn);

    return res;
};