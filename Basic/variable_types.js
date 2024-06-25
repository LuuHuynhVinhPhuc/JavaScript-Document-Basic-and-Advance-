/**
 * Các kiểu dữ liệu trong JS
 * 
 * 1/ Kiểu dữ liệu nguyên thủy - Primitive Data
 *       - Number 
 *       - String 
 *       - Boolean
 *       - Undefined
 *       - Null
 *       - Symbol
 * 
 * 2/ Dữ liệu phức tạp - Complex Data
 *       - Function
 *       - Object
 */

// Kiểu dữ liệu Symbol

var id = Symbol('id'); // unique

// Kiểu dữ liệu function
 var myFunc = function(){
    alert('Xin chao, day la mot thong bao duoc chay trong ham function');
 };
 myFunc();  // chạy function

 // Kiểu dữ liệu object 
 var myObject = {
    name: "Phucluu",
    age: 18,
    address: "Ho Chi Minh city",

    // có thể lồng một function vào 
    sayHello: function(){

    }
 };
 console.log("myObject", myObject);

 // Mảng tĩnh 
 var myArray = [1, 2, 3, 4, 5]; 

 // Kiểm tra kiểu dữ liệu của đối tượng 
 console.log("Kiểu dữ liệu của myArray", typeof myArray); // object 