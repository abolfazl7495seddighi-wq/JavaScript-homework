const forElem = document.querySelector(".register-form");

const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const city = document.querySelector("#city");
const gender = document.querySelectorAll("input[name='gender' ");
const interests = document.querySelectorAll("input[name='interests' ");

const userNameErrorElem = document.getElementById("username-error")


forElem.noValidate = true;

const userNameArray = ["ali", "admin"];



forElem.addEventListener("submit", (event) =>{
    event.preventDefault();
 
    const isFormValid = FormValid()

    if(!isFormValid) return;

    // console.log({isEmailValid});
    // console.log(userName.value);
    // console.log({ isUsernameValid });
    // console.log("Registered");
    

});


function FormValid(){
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isCityValid = validateCity();
    const isGenderValid = validateGender();
    const isInterestsValid = validateInterests();

    return (
        isUsernameValid && 
        isEmailValid  && 
        isPasswordValid && 
        isCityValid && 
        isGenderValid &&
        isInterestsValid
    );

}


function setError(name, message){
    const errorElem = document.getElementById(`${name}-error`);

    errorElem.textContent = message;
}



function clearError(name) {
    const errorElem = document.getElementById(`${name}-error`);

    errorElem.textContent = "";
    
}



function validateUsername() {
    const value = userName.value.trim();

    if(userName.value === ""){
        setError("username", "نام کاربری الزامی است");
        return false;
    }

    const forbiddenChar = ["!", " ", "?", "#", "\t"];

    for (let index = 0; index < value.length; index++) {
        const char = value[index];

        if(forbiddenChar.includes(char)){
            setError("username", "کاراکتر غیرمجاز");

            return false;

        }  
    }

    if (userNameArray.includes(value)) {
        setError("username", "نام کاربری تکراری است");
        return false;
    }

    clearError("username");
    return true;
}



function validateEmail (){
    const value = email.value

    if(value === ""){
        setError("email", "ایمیل الزامی است");

        return false;
    }

    const atIndex = value.indexOf("@");
    console.log({atIndex});
    
    if(atIndex === -1){
        setError("email", "ایمیل باید شامل @ باشد");
        return false;
    }

    const dotIndex = value.indexOf(".")

    if(dotIndex === -1){
        setError("email", "کاراکتر نقطه الزامی است");
        return false;
    }

    clearError("email");
    return true;
}


function validatePassword() {
    const value = password .value

    if(value.length < 8) {
        setError("password", "رمز عبور باید بیشتر از 8 کاراکتر باشد");
        return false;
    }

    let hasUpperCase = false;
    let haslowerCase = false;
    let hasNumber = false;

    for (let index = 0; index < array.length; index++) {
        const char = value[index];
        
        const charCode = value.charCodeAt(index)

        if(charCode >= 65 && charCode <= 90){
            hasUpperCase = true;

        }else if(charCode >= 97 && charCode <= 122){
            haslowerCase = true;

        }else if(charCode >= 48 && charCode <= 57){
            hasNumber = true;

        }

    }

    if(!hasNumber){
        setError("password", "رمز عبور باید شامل عدد نیز باشد");
        return false;
    }


    clearError("password");
    return true;

}


function validateConfirmPassword() {
    if(confirmPassword.value === ""){

    }
    if(confirmPassword.value !== password.value){

    }
    
}



function validateCity() {
    console.log(city.value);
    const value = city.value
    if(value === "") {


    }
    
    clearError("city");
    return true

}


function validateGender(){

    let selected = false

   for (let index = 0; index < gender.length; index++) {
    const element = gender[index];
        if(element.checked){
        selected = true
        }  
   }
 
   if(!selected){
    setError("gender", "جنسیت الزامی است");

    return false;

   }  

   clearError("gender");
   return true;

} 


function validateInterests(){

    let selected = [];

    for (let index = 0; index < interests.length; index++) {
        const element = interests[index];
        if(element.checked){
            console.log(element.value);

            selected.push(element.value);
            
        }

    }

    if(selected.length === 0){
        setError("interests", "حداقل یک مورد الزامی است")

        return false;
    }
    
    clearError("interests");
    return true;
}




