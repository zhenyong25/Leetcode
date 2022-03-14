var countGoodRectangles = function(rectangles) {
    let maxLen = 0, res = 0
    for(let i = 0; i < rectangles.length; i++){
        let min = Math.min(...rectangles[i])
        if(min > maxLen){
            maxLen = min;
            res = 1
        } else if (min === maxLen) {
            res++
        }
    }
    return res
};
