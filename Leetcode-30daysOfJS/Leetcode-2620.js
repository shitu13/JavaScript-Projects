//////////   2620. Counter
///////////  Approach 1


var createCounter = function(n) {
    
    return function() {
        return n++;
    };
}


//// Approach 2

var createCounter = (n) =>() => n++;

