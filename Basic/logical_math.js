/** 
 * có hai dạng toán tử logical 
 * and : && 
 * or: ||
 */

// Example:

//and 

var result = 'A' && 'B' && 'C' && 'D'; // toán tử and sẽ duyệt và nếu có có 1 giá trị false thì sẽ return giá trị đó còn nếu không có sẽ return ra giá trị cuối 
console.log(result); // 'D'

// or 
var result = 'A' || 'B' || 'C' || 'D'; // toán tử or sẽ duyệt từ đầu đến cuối, giá trị nào true sẽ return lại giá trị đó 
console.log(result); // 'A'


// Những thuật toán trên dùng để duyệt từng đoạn mã dữ liệu với điều kiện chọn ra đối tượng khác với các đối tượng còn lại 

/**
 * Các giá trị null thường gặp 
 * 
 * 0 
 * ''
 * null
 * undefined
 * NaN
 * false
 * 
 */