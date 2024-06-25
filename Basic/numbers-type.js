// Kiểu số trong javaScript 

/**
 *  1. Tạo giá trị number 
 *      - Các cách tạo 
 *      - Dùng cách nào? Tại sao?
 *      - Kiểm tra data type
 * 
 * 2. Làm việc với number
 *      - To string 
 *      - To Fixed
 */

// create element 
var age = 18;
var PI = 3.14;

// another way
var myAge = new Number(18);  // nên tránh cách này vì đây là tạo dạng đối tượng hoặc có thể là cho ra type Object 

// To string
console.log(age.toString()); // "18"

// To fixed
console.log(PI.toFixed(2)); // "3.14" ( fixed sẽ xài cho làm tròn số thập phân ) ở đây là làm tròn 2 chữ số 
