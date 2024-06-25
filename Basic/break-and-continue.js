// break và continue có thể sử dụng trong tất cả các loại vòng lặp 

// break dùng để thoát khỏi vòng lặp
// continue dùng để bỏ qua các step của vòng lặp 


for(var i =0; i<10; i++){

    if(i%2 !== 0){
        continue; // sẽ bỏ qua những điều kiện không đúng 
    }

    console.log(i);

    if(i>=5){
        break; // sẽ dừng ở lần thứ 5
    }

}