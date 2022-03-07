var maximumWealth = function(accounts) {
    //do no need to put into array only compare 
    var res = 0; 
    for (var i=0; i<accounts.length; i++){
        //initialized the value to 0
        var totalSum = 0; 
        for (var j=0; j<accounts[i].length; j++){
            totalSum += accounts[i][j]; 
        }
        //compare the result between currentMax and totalSum 
        //use Math.max 
        res = Math.max(res,totalSum); 
} 
return res;  
};
