let a = +prompt("nhập độ dài cạnh thứ 1");
let b = +prompt("nhập độ dài cạnh thứ 2");
let c = +prompt("nhập độ dài cạnh thứ 3");
if(a+b==c||a+c==b||b+c==a){
    console.log("độ dài hợp lệ");
}else{
    console.log("độ dài không hợp lệ");
}