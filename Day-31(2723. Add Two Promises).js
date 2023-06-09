/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const integers = await Promise.all([promise1,promise2]);
    let sum = 0;

    for(const curr of integers){
        sum+= curr;

    }
     return sum
    
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
