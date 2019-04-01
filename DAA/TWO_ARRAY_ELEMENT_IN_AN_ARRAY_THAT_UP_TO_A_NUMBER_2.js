//Problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
function findSumBetter(arr, weight) { 
    var hashtable = {};
for (var i=0, arrLength=arr.length; i<arrLength; i++){
     var currentElement = arr[i],
                 difference = weight - currentElement;
             // check the right one already exists
if (hashtable[currentElement] != undefined) { 
    return [i, hashtable[weight-currentElement]];
}else{
// store index
                 hashtable[difference] = i;
                  return -1;
                 }
                }
            }
console.log(findSumBetter([1,2,3,4,5],9));
