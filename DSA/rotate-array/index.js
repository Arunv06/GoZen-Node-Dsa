function reverse(arr, start, end) {
    while (start < end) {
        // Swap elements 
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    
    return arr;
}
// Input
const inputArray2 = [3, 8, 9, 2, 5];
const k2 = 2;
console.log("Rotated Array:", rotateArray(inputArray2, k2)); 
