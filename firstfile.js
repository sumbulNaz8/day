"use strict";
// ### Day 8: TypeScript Modules (Export and Import)
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
// #### Question 1: Exporting and Importing Multiple Functions
// *Question:*
// Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.
// *Hint:*
// - Use export to export the functions in the first file.
// - Use named imports to bring the functions into the second file.
// - Ensure that the file paths are correctly specified when importing.
//Answer
//First file: Export two functions CalculateArea and CalculatePerimeter
function calculateArea(width, height) {
    return width * height;
}
exports.calculateArea = calculateArea;
// echo "# Day8" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sumbulNaz8/Day8.git
// git push -u origin main
function calculatePerimeter(width, height) {
    return width * height;
}
exports.calculatePerimeter = calculatePerimeter;
