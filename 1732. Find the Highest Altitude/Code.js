var largestAltitude = function(gain) {
    var alt = []; 
    var max = 0; 
    alt[0] = 0; 
    
    for(var i=0; i<gain.length; i++){
        alt[i+1] = alt[i] + gain[i]
        if (alt[i+1]> max){
            max = alt[i+1];
        }
    }
    
return max 
};
