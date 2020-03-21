module.exports = class DepthCalculator {
    calculateDepth(arr, count=1) {
        for(let i=0; i<arr.length; i++)
        if(Array.isArray(arr[i])){
            arr = arr.flat();
            count ++;
            return this.calculateDepth(arr,count);
        }
    return count;
    };
};