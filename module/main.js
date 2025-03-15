// Importing named exports
import { add, subtract } from './mathFunctions.js';

// Importing default export
import multiply from './mathFunctions.js';

console.log("Addition:", add(5, 3));        // Output: Addition: 8
console.log("Subtraction:", subtract(5, 3)); // Output: Subtraction: 2
console.log("Multiplication:", multiply(5, 3)); // Output: Multiplication: 15
