var restoreString = function(s, idx) {
    const results = [] 
    for (let i=0; i<s.length; i++){
        results[idx[i]] = s[i]
    }
return results.join(''); 
};
