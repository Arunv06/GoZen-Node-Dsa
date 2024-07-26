function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    
    let i = 0; 
    
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) { 
            i++; 
            arr[i] = arr[j]; 
        }
    }
        return i + 1;
}
// Input
const testArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
const newTestLength = removeDuplicates(testArray);
console.log("New Length:", newTestLength); // Output: 5
console.log("Array without duplicates:", testArray.slice(0, newTestLength));
