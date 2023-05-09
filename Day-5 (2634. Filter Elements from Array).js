/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

//declarative programing 

// return arr.filter(fn);

//imprative programing
let res = [];
for(let i=0;i<arr.length;i++){

     if(fn(arr[i], i)){
       res.push(arr[i]);
     }

}
       return res;

    
};
