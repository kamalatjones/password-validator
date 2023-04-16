function validatePassword() {
    let password = (document.getElementById("password").value)
    let isLowerCase = false;
    let isUpperCase = false;
    let isNumber =false;
    let isSpecialChar = false;
    let isMinLength = false;
    let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "[", "]", "{", "}", ";", ":", "/", "?", ".", ">"]

    for(let i = 0; i < password.length; i++){
        if(password[i] == Number(password[i])){
            isNumber = true;
        }
        else if(specialChar.indexOf(password[i]) >=0){
            isSpecialChar = true;
        }
        else if(password[i] === password[i].toLowerCase()){
            isLowerCase = true;
        }
        else if(password[i] === password[i].toUpperCase()){ 
            isUpperCase = true;
        }
    }

    if(password.length >= 8) {
        isMinLength = true;
    }

    if(isLowerCase == true && isUpperCase == true && isNumber == true && isSpecialChar == true && isMinLength == true) {
    alert("All conditions are true")
    }
    else {
    alert("All conditions are not met")
    }
}