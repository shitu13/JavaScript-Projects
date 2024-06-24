// Promise is an object, it has three states. 

//1. Pending
//2. Resolved
//3. Rejected


/// 2621 Sleep.

//Approach 1

async function sleep(millis) {
    function callback(res, rej){
        setTimeout(res, millis);
    }

    return new Promise(callback);
}



//Approach 2

async function sleep(millis) {
    await new Promise((res, rej) =>{
        setTimeout(res, millis);
    });
}

