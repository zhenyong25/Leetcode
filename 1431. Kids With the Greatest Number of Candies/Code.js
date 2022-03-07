var kidsWithCandies = function(candies, extraCandies) {
    ans=[]; 
    var max=0; 
    
/** shortcut equivalent of 
    if (val > max) {
       max = val
}*/
    
for (const val of candies) {
    val > max && (max = val);
  }
for (let i = 0; i < candies.length; ++i) {
    //.push() 
    ans.push(candies[i] + extraCandies >= max);
  }
 return ans;
}   
