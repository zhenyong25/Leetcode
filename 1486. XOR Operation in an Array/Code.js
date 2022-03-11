var xorOperation = function(n, start) {
    const nums=[] 
    var ans=0; 
    
    for(var i=0 ; i<n ; i++){
        nums[i] = start + 2 * i
    }
    
    for(var j=0 ; j<n-1 ; j++){
        nums[j+1]=nums[j]^nums[j+1]
    }

return nums[n-1]
};
