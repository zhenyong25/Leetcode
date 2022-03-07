var getConcatenation = function(nums) {
    
    /* declare the length of array ans */
    const j = 2 * nums.length; 
    var ans = new Array(j); 
    
    for (var i=0; i<nums.length; i++){
        var n = nums.length; 
        ans[i]=nums[i];
        ans[i+n]=nums[i]; 
        }
return ans; 
}
