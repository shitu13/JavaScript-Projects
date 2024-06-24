                                // Approach 1
                                
var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};



                                // Approach 2

var createHelloWorld = () => () => "Hello World"

