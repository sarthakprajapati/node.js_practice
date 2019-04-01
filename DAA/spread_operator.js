var array1 = [1,2,2,3];
function addition(a,b,c,d,e,f){
    return a+b+c+d;
}
console.log(addition(...array1)); // ... three periods is a spread operator  
// it is used to expand arguments where zero arguments are expected.

