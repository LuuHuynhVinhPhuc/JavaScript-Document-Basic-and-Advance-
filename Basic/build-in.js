// build in method 

/**
 * alert 
 * console
 * confirm
 * prompt
 * set timeout
 * set interval 
 */

// alert for show alert oke 
alert('xin chao day la alert');
// console
var fullName = 'Marcus Luu';
console.log(fullName); // print it 
console.warn('day la dong lenh chu y'); //warning
console.error('day la dong lenh loi'); // error 

// confirm 
confirm('Xac nhan ban bao nhieu tuoi'); // for confirm that input data is correct? (have another way to take that.. so let talking later)

// prompt
prompt('Xac nhan ban bao nhieu tuoi'); // same confirm but have a text box below main content

// set time out 
setTimeout(function() {
    alert("5 giay da qua ")
}, 5000); // run that function after 5 second and finish 

// set interval
setInterval(function() {
    console.log("5 giay da qua");
}, 5000); // run that function after 5 second and do it again  