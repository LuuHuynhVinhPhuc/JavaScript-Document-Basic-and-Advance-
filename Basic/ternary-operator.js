// Theo cách viết toán tử thông thường 

var course = {
    name: 'JavaScript',
    coin: 250
};

// take a check 
if (course.coin > 0){
    console.log(`${coin.coin} Coins`);
}else{
    console.log('Miễn phí');
}

// another way
var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'; // Vế 1 là điều kiện, vế 2 là kết quả đưa ra, vế 3 là nếu kết quả kiểm tra là sai

var a = 1;
var b =2 

var c = a > 0 ? a:b; // nếu a > 0 thì c = a, ngược lại c = b
