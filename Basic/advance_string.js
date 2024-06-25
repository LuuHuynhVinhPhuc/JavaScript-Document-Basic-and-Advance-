// create a string 
var fullName = "Marcus Luu"; // kiểu dữ liệu là string 
// another way to create
var anotherFullName = new String("Marcus Luu");  // dài dòng hơn, đây là kiểu tạo ra 1 đối tượng => kiểu dữ liệu của nó là dạng object 

// trường hợp nếu muốn in được dấu nháy đơn trong text thì ta sử dụng dấu backslash (\)
var text = 'It\'s a beautiful day'; // It's a beautiful day  // có 1 dấu backslash trước chữ s 

 // template string ES6

 var firstName = 'Phúc';
 var lastName = 'Lưu';

 // template string
 var fullName = `${firstName} ${lastName}`; // Phúc Lưu


// Some features to work with
var myString = 'Tôi tên là Lưu Huỳnh Vĩnh Phúc!';

// Find it 
var index = myString.indexOf('Lưu'); // 11
console.log(index); // 11 // nếu nghiệm trả lại là -1 thì sẽ không tìm thấy ( hệ thống sẽ đến từ 0 ) nhưng nó sẽ trả về giá trị được tìm thấy đầu tiên

// Có thể setting cho nó tìm giá trị như vậy ở 1 vị trí khác 
var stringLoopIndex = 'Tôi tên Lưu Lưu Lưu Huỳnh Vĩnh Phúc';
// Tìm chữ lưu ở vị trí thứ ba 
var index = stringLoopIndex.indexOf('Lưu', 10); // 10 là vị trí
// Tìm chữ cuối cùng 
var lastIndex = stringLoopIndex.lastIndexOf('Lưu'); // 15 ( đều trả về -1 nếu không tìm thấy )

// một cách khác là sử dụng search 
var searchIndex = myString.search('Lưu'); // 11 ( search sẽ được dùng trong những đoạn chuỗi phức tạp và biểu thức khó cần sự chính xác cao )

// Cut string 
var cutString = myString.slice(11, 15); // Lưu H ( đây là cách cắt từ trái sang phải)
// Cut string from the end
var cutStringFromEnd = myString.slice(-5); // Phúc! ( đây là cách từ phải sang trái : Dùng số âm để đếm )

// Replace
var replaceString = myString.replace('Lưu', 'Luu'); // Tôi tên là Luu
// Replace all
var replaceAllString = myString.replace(/Lưu/g, 'Luu'); // nếu trong đoạn mã có quá nhiều string giống nhau thì có thể sử dụng biểu thức chính quy để thay thế toàn bộ 

// Convert to upper or lower case
var upperCaseString = myString.toUpperCase(); // TÔI TÊN LÀ LƯ
var lowerCaseString = myString.toLowerCase(); // tôi tên là lưu

// Trim string
var trimString = '   Tôi tên là Lưu Huỳnh Vĩnh Phúc!   ';
var trimedString = trimString.trim(); // Tôi tên là Lưu Huỳnh Vĩnh Phúc (cắt hết khoảng trắng bên ngoài khối chữ)

// Split string 
var splitString = 'Tôi tên là Lưu Huỳnh Vĩnh Phúc!';
var splitArray = splitString.split(' '); // ["Tôi", "tên", "là (cắt chuối theo khoảng trắng hoặc bất cứ điều kiện nào nhập vào)
// nếu thay vì 1 ' ' thì nếu ghi như vầy '' thì sẽ cắt từng chữ trong 1 từ ra 


// get a character by index
var charByIndex = myString.charAt(11); // L ( nếu vượt quá sẽ trả về khoảng trắng)
// another way
var charByIndexAnotherWay = myString[11]; // L ( nếu vượt quá hệ thống sẽ trả về undefined)
