////     2637. Promise Time Limit
//  Approach 1

var timeLimit = function (fn, t) {

    return async function (...args) {
        //Return promise
        return new Promise((resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(()=>clearTimeout(id));
        })
    }
};


/// Approach 2
var timeLimit = function (fn, t) {

    return async function (...args) {
        //Return promise
        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            try{
                const res = await fn(... args);
                resolve(res);
            }catch(err){
                reject(err);
            }
        })
    }
};
 