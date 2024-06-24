////// 2665. Counter II


var createCounter = function (init) {
    let curr = init;

    return {
        increment: () => {
            return ++curr;
        },
        decrement: () => {
            return --curr;
        },
        reset: () => {
            curr = init;
            return curr;
        }
    };
};
