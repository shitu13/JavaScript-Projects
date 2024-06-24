////// 2626. Array Reduce Transformation
/// Approach 1

var reduce = function(nums, fn, init) {
    let res = init;

    for(const n of nums){
        res = fn(res, n)
    }
    return res;
};


/// Approach 2

var reduce = function(nums, fn, init) {
    let ans = nums.reduce(fn, init);

    return ans;
};