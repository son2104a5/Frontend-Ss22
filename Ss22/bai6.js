let n = +prompt("nhập số có 4 chữ số");
n = n/1000;
for(let i=0;i<4;i++){  
    let digit = n%10;
    console.log(Math.floor(digit));
    n = n*10;
}