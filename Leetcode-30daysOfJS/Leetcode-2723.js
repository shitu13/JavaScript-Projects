//// 2723. Add Two Promises
//// Approach 1


var addTwoPromises = async function (promise1, promise2) {
    return new Promise((res, rej) => {
        promise1.then((val1) => {
            promise2.then((val2) => res(val1 + val2))
        })
    })
};

///////////// Approach 2

var addTwoPromises = async function (promise1, promise2) {
    return new Promise(async(res, rej) => {
        const sum = await Promise.all([promise1, promise2]);
        res(sum[0] + sum[1])
    })
};

///////////// Approach 3


var addTwoPromises = async function (promise1, promise2) {
    return new Promise(async(res, rej) => {
        const sum = await Promise.all([promise1, promise2]);
        let ans = sum.reduce((acc, curr)=> acc+curr);
        res(ans);
    })
};

