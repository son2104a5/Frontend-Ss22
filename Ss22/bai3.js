let n = +prompt("Nhập 1 số tự nhiên bất kỳ");
if(Number.isInteger(Math.sqrt(n))){
    console.log(n + " " + "là số chính phương");
}else{
    console.log(n + " " + "không phải là số chính phương");
}