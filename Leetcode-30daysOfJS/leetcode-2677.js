/// 2677. Chunk Array
// Approach 1

var chunk = function (arr, size) {
    const res = [];
    let subarr = [];

    for (let i = 0; i < arr.length; i++) {
        subarr.push(arr[i]);

        if (subarr.length == size) {
            res.push(subarr);
            subarr = [];
        }
    }
    if (subarr.length) {
        res.push(subarr);
    }
    return res;
};



// Approace 2: uses slice method.

var chunk = function(arr, size) {
    const res = [];
    for(let i =0; i<arr.length; i+=size){
        res.push(arr.slice(i, i+size));
    }
    return res;
};
