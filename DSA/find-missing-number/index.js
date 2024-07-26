function findMissingNumber(arr) {
    const n = arr.length + 1;
    
    const sumN = (n * (n + 1)) / 2;
    
      const sumArray = arr.reduce((acc, num) => acc + num, 0);
        const missingNumber = sumN - sumArray;
    
    return missingNumber;
}
// Input
const inputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Missing Number:", findMissingNumber(inputArray));
console.log("************************************************")



