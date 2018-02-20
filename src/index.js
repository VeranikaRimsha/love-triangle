/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
    arr.unshift(0);
    var counter = 0;
    for(var n = 1; n < arr.length; n++){
        if( n == arr[arr[arr[n]]]
            && arr[n] == arr[arr[arr[arr[n]]]]
            && arr[arr[n]] == arr[arr[arr[arr[arr[n]]]]]
            && arr[arr[n]] != arr[n]
            && arr[arr[n]] != n
            && arr[n] != n){
            delete(arr[arr[arr[n]]]);
            delete(arr[arr[n]]);
            delete(arr[n]);
            counter++;
        }
    }
    return counter;
};
