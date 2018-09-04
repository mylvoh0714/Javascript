var Person = {
    age : 28,
    name : "Hyun Taek",
    pow : function(a,b) {
        if(b==0) return 1;
        var ret = 1;
        for(var i=1;i<=b;i++) {
            ret *= a;
        }
        return ret;
    }
};

console.log('제곱결과 : %d',Person.pow(2,10));