var number = 6;

//  Thực hiện phép toán tính như sau 

var output = number++ + --number;

// Giải thích 
// 1. number++ : tăng giá trị của number lên 7, nhưng trả về giá
// trị cũ là 6
// 2. --number : giảm giá trị của number xuống 6, và trả về giá
// trị mới là 6
// 3. 6 + 6 = 12

console.log('output của thuật toán: ', output) // giá trị sẽ bằng 12 

// nếu nó là hậu tố thì nó sẽ trả giá trị cũ 
// nhưng nếu nó là tiền tố thì nó sẽ trả ra giá trị mới sau khi thao tác
