let password = "sTrongP4ssword!";
let score = 0;

if(password.length === 0){
    score = 0
}else if(password.length < 8){
    score += 2
}else if(password.length >= 12){
    score += 12
}


for(let index = 0; index < password.length - 1; index++){
    let charcode =  password.charCodeAt(index);

    if(charcode >= 65 && charcode <= 90){
        console.log("uppercase");
        
    }

}





