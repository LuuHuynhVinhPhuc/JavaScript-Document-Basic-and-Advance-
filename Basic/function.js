// Có thể đặt hàm trùng tên nhưng khi chạy sẽ lấy hàm trùng tên cuối cùng trong code

// Có thể khai báo biến trong hàm nhưng biến đó chỉ có thể sử dụng trong hàm đó thôi không phải biến cục bộ


// Định nghĩa hàm trong hàm 

function showMessage(){
    function showMessage2(){
        console.log("Hello World");
    }

    // print mess2
    showMessage2();
}

showMessage(); // Hàm  showMessage2(); đã được thực hiện 

// Các loại function
// 1. Function Declaration ( là cái ở trên )

// 2. Function Expression 
var showMessage3 = function() {} // được gán cho một biến 

setTimeout(function(){

});

var myObject = {
    myFunction: function(){
        console.log("Hello World");
    },
};

// 3 dạng trên đều là Function Expression

