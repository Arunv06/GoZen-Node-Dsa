function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive
    return n * factorial(n - 1);
}
// Input
const n2 = 10;
console.log(`Factorial of ${n2}:`, factorial(n2)); 
