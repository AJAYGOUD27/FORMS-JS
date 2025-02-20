function validate() {
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var password = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    
    let emailneed = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let passwordmust = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

    

    if (email.value === '') {
        emailError.innerHTML = "Please enter your email <i class='fas fa-exclamation-circle'></i>.";
        return false;
    } else if (!emailneed.test(email.value)) {
        emailError.innerHTML = "Please enter a valid email <i class='fas fa-exclamation-circle'></i>.";
        return false;
    } else {
        emailError.innerHTML = '';
        
    }
    if (password.value === '') {
        passwordError.innerHTML = "Please enter your password <i class='fas fa-exclamation-circle'></i>.";
        return false;
    } else if (!passwordmust.test(password.value)) {
        passwordError.innerHTML = "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character <i class='fas fa-exclamation-circle'></i>.";
        return false;
    } else {
        passwordError.innerHTML = '';
        return false;
    }

    return false;


}
