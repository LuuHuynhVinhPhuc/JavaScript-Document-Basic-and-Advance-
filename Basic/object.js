// Khởi tạo một object

var myInfo= {
    name: 'Phuc Luu',
    age: 18,
    address: 'Ho Chi Minh city',
    getName: function(){
        return this.name;
    }
};

// print it
console.log(myInfo); 
console.log(myInfo.getName()) // run a function

//  Các thuật ngữ bên trong object
// 1. Property (Thuộc tính): là các cặp key-value trong object.
// 2. Method (Phương thức): là các hàm được định nghĩa trong object.

// add another one to this object 
myInfo.email = 'phuc.luu@gmail.com';
// another way 
myInfo['phone'] = '0123456789'; // trường hợ nếu nó có những chữ cái đặc biệt quy phạm quy tắc đặt tên

// get info
console.log(myInfo.name); // get name ( underfined if it not exists)

// delete items
delete myInfo.age; // delete age