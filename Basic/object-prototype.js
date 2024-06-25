function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    // for a function
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}


// add prototype class 
User.prototype.className = 'PM2003'; // đối tượng sẽ nằm trong phần proto 

User.prototype.getClassName = function(){
    return this.className;
};

// Cú pháp tạo ra đối tượng
var author = new User('Phuc', 'Luu', 'avatar')
var user = new User('Phuc','Liu', 'avatar');

// print it
console.log(user.className);
console.log(user.getClassName());

