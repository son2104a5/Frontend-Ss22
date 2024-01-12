let month = +prompt("nhập tháng");
let year = +prompt("nhập năm");
if(year > 0){
    switch(month){
        case 1: case 3: case 5: case 7: case 9: case 11:
            console.log("Tháng " + month + " năm " + year + " có 31 ngày");
            break;
        case 4: case 6: case 8: case 10:
            console.log("Tháng " + month + " năm " + year + " có 30 ngày");
            break;
        case 2:
            if(year%4===0&&year%100!==0){
                console.log("Tháng " + month + " năm " + year + " có 29 ngày");
            }else{
                console.log("Tháng " + month + " năm " + year + " có 28 ngày");
            }
            break;
        default:
            console.log("Giá trị không hợp lệ");
            break;
    }
}else{
    console.log("Giá trị không hợp lệ");
}