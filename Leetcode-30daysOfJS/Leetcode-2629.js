///// 2629. Function Composition
///// Approach 1


var compose = function(functions) {
    
    const fn = (acc, f) => f(acc);

    return function(x){
        return functions.reduceRight(fn, x);
    }
};

//// Approach 2

var compose = function(functions) {
    
    return function(x) {
        for(const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};
