var shuffle = function(nums, n) {
    let ans = [];
    // use .push() method 
    for(let i = 0; i < n; i++){
        ans.push(nums[i]);
        ans.push(nums[i+n]);   
    }
    return ans;
};
