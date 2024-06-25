// object constructor

// Đây không phải là đối tượng mà chỉ là bản thiết kế của đối tượng để có thể tạo ra các object cần thiết mà thôi


function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    // for a function
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// Cú pháp tạo ra đối tượng
var author = new User('Phuc', 'Luu', 'avatar')
var user = new User('Phuc','Liu', 'avatar');

// add another property for them
author.title = 'Học JavaScript với tớ nhé';
user.comment = 'Bài hay quá thầy ơi';