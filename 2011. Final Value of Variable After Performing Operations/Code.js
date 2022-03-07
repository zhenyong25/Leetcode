var finalValueAfterOperations = function(operations) {
    var x = 0; 
    for(var i=0; i<operations.length; i++){
        switch(operations[i]){
            case("--X"):
                x -= 1; 
                break; 
            case("X--"):
                x -= 1; 
                break; 
            case("X++"):
                x += 1; 
                break; 
            case("++X"):
                x += 1; 
                break;
        }
    }
return x; 
};
