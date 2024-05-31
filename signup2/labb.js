const container = document.querySelector(".container"),
    passwordHideShow = document.querySelectorAll(".showHidePw"),
    passwordFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
passwordHideShow.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        passwordFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";
                passwordHideShow.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type = "password";
                passwordHideShow.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})


signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});
