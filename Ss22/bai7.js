let a = +prompt("a=?");
let b = +prompt("b=?");
let c = +prompt("c=?");
switch(a){
    case 0:
        if(b===0){
            if(c===0){
                console.log("x có vô số nghiệm");
            }else{
                console.log("x vô nghiệm");
            }
        }else{
            console.log("x = " + -c/b );
        }
        break;
    default:
        if(b===0){
            if(c===0){
                console.log("x = 0");
            }else{
                console.log("x1 = " + Math.sqrt(-c/a), " x2 = " + -Math.sqrt(-c/a));
            }
        }else{
            if(c===0){
                console.log("x = 0, x = " + -b/a);
            }else{
                let y = b*b - 4*a*c;
                if(y<0){
                    console.log("x vô nghiệm");
                }else if(y==0){
                    console.log("x = " + -b/(2*a));
                }else{
                    console.log("x1 = " + (-b+Math.sqrt(y))/(2*a) + ", x2 = " + (-b-Math.sqrt(y))/(2*a));
                }
            }
        }
        break;    
}