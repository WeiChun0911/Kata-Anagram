// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().every((value,index)=>{
        return value === original.toLowerCase().split('').sort()[index]
    })
};

console.log(isAnagram("foefet", "toffee"));