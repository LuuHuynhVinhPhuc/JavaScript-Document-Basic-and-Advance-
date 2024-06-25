// dòng for cơ bản 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Dùng for để duyệt mảng
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in loop :  Dùng để duyệt mảng object 
let person = { name: 'John', age: 30, country: 'USA' };

for (var key in person) {
    console.log(key + ': ' + person[key]);
}

// có thể dùng for in để tách từng chữ ra khỏi chuỗi
let str = 'Hello World';

for (var i in str) {
    console.log(str[i]);
}

// for of loop
for (var value of Object.keys(person)){
    console.log(person[value]);
}

// Dùng với mảng:

// for...in: Không được khuyến nghị sử dụng với mảng vì nó lặp qua các chỉ số (key) thay vì giá trị.
// for...of: Được khuyến nghị sử dụng với mảng vì nó lặp qua các giá trị của mảng.
// Tóm lại:
// for...in: Dùng để lặp qua các thuộc tính liệt kê được của đối tượng.
// for...of: Dùng để lặp qua các giá trị của đối tượng iterable như mảng, chuỗi, Map, Set, v.v.

// vòng while
var i = 1;

while(i <= 100){
    console.log(i);
    i++;
}

// vòng do - while
var i = 1;

do{
    // code
    console.log(i);

}while(i<10);  // sẽ kiểm tra điều kiện từ vòng lặp thứ 2 ( sẽ thực hiện thao tác lặp đầu tiên )