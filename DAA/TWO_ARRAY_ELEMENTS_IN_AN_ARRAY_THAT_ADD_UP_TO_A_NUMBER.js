//Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
function findSum(arr, weight){
    for(var i=0,j = arr.length;i<j;i++){
        for(var p=i+1; p<arr.length;p++ ){
            if(arr[i]+arr[p]==weight)
                return [arr[i],arr[p]];
        }
    }
    return -1;
}

console.log(findSum([1,2,3,4,5],9));
// This algorithm has complexity O(n^2).
