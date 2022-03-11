var decode = function(encoded, first) {
    const arr=[]; 
    arr[0]=first; 
    
    for(var i=0;i<encoded.length;i++){
        arr[i+1] = encoded[i] ^ arr[i] 
    }
return arr; 
};
