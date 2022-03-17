var minOperations = function(nums) {
    let incr = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            
            let change = nums[i-1] - nums[i] +1;
            incr+=change;
            nums[i]+=change;
        }

    }
    return incr;
};
