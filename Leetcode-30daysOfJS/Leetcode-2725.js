///    2725. Interval Cancellation

var cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(()=>{
        fn(...args)
    }, t)

    let cancelfn = () => clearInterval(timer);

    return cancelfn; 
};