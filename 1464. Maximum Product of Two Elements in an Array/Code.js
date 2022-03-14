var maxProduct = function(nums) {
    var max = 0 ; 
    var product = 0 ; 
    
    for (var i = 0; i<nums.length; i++){
        for (var j=i+1; j<nums.length; j++){
            product = (nums[i]-1)*(nums[j]-1)
            if (product>max){
                max = product; 
            }
        }
    } 
return max;   
};
