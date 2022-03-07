class Solution {
public:
    int romanToInt(string s) {
        
        unordered_map<char, int> rm;
        
        rm['I'] = 1;     
        rm['V'] = 5;
        rm['X'] = 10;
        rm['L'] = 50;
        rm['C'] = 100;
        rm['D'] = 500;
        rm['M'] = 1000;
        
        int sum = 0;      // we will store our ans in this variable
        
        for(int i = 0; s[i]!='\0'; i++){     
            
            if(rm[s[i]] < rm[s[i+1]]){
                sum += rm[s[i+1]] - rm[s[i]];
                i++;
            } else 
                sum += rm[s[i]];
        }
        
        return sum;    
    }
};
