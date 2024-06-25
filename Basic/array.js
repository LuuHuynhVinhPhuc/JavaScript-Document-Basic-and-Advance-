// create an array with programing language
let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// some tools with it 

// to String
console.log(programmingLanguages.toString()); // JavaScript,Python,Java,C++,Ruby

// Join
console.log(programmingLanguages.join(" | ")); // JavaScript | Python | Java | C++ |

// pop
programmingLanguages.pop(); // xóa elements cuối mảng và trả về phần tử đã xóa (mất ruby và trả ra ruby), nếu đã hết thì sẽ trả ra undefined

// push
programmingLanguages.push("Go"); // thêm phần tử vào cuối mảng và trả về độ dài mới của mảng

// shift
programmingLanguages.shift(); // xóa phần tử đầu tiên của mảng và trả về phần tử đã xóa 

// unShift
programmingLanguages.unshift("Swift"); // thêm phần tử vào đầu mảng và trả về độ dài mới

// Splice
programmingLanguages.splice(1, 0, "TypeScript"); // thêm phần tử vào vị trí số 1 và xóa đi phần tử 0 ( có thể thay đổi biến số ), và thêm vào 1 chuỗi string khác nữa ở trước đối tượng được chọn hoặc nếu không phải số 0 thì nó sẽ xóa phần tử đó và chèn vào phần tử mới

// Concat
let newProgrammingLanguages = programmingLanguages.concat(["Kotlin", "Dart"]); // nối 2 mảng với nhau 

// slice
let sliceProgrammingLanguages = programmingLanguages.slice(1, 3); // cắt mảng từ vị trí bắt đầu 1 đến vị trí kết thúc là 3 
// 1 ý tưởng khác là copy mảng để làm shared references 
// có thẻ slice ngược được ( dùng số âm )


// Array methods
/**
 * forEach
 * every
 * some
 * find
 * filter
 * map
 * reduce
 */

var courses = [
    { id: 1, name: "JavaScript", coin: 250 },
    { id: 2, name: "HTML/CSS", coin: 0 },
    { id: 3, name: "Ruby", coin: 500 },
    { id: 4, name: "Python", coin: 0 },
];

// dùng để duyệt các phần tử bên trong mảng
// forEach 
courses.forEach(function(course, index){
    console.log(index, course);
});

// every
// kiểm tra xem tất cả các phần tử có thỏa mãn điều kiện hay không, trả về giá trị boolean
var isFree = courses.every(function(course, index){
    return course.coin === 0;
});
console.log(isFree);

// map 
var courses2 = [
    {
        id: 1,
        name: 'Khóa học Javascript',
        coin: 0,
        coinTxt: 'Giá 0'
    },
    {
        id: 2,
        name: 'Khóa học Ruby',
        coin: 100,
        coinTxt: 'Giá một trăm'
    },
    {
        id: 3,
        name: 'Khóa học HTML, CSS',
        coin: 200,
        coinTxt: 'Giá hai trăm'
    },
];


var showCourses2 = function(course, index, originArray){
    // console.log(course)
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinTxt: `Giá: ${course.coin}`,
        
        // những đối tượng có thể trả về
        index, // thứ tự của mảng khi duyệt ( chạy từ 0 đến hết mảng đối tượng ),
        originArray: originArray // mảng gốc
    }
};
var newCourses = courses2.map(showCourses2); // trả về một mảng có số lượng phần tở tương đương ( nếu để hàm trống như vậy thì sẽ trả về undefined )



