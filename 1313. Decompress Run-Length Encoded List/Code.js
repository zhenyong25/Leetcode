// ...spread operator 
// array.fill(value, start, end)

var decompressRLElist = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i += 2) {
        result.push(...new Array(nums[i]).fill(nums[i + 1]));
    };
    return result;
};
