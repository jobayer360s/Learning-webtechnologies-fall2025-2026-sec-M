function validateEmail() {
    let email = document.getElementById('email').value.trim();
    let error = "";

    
    if (email.length === 0) {
        error = "Email cannot be empty.";
    } else {
        let atIndex = email.indexOf('@');
        let dotIndex = email.lastIndexOf('.');

        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
            error = "Invalid email format.";
        }
     
    }


    let errorDiv = document.getElementById('emailError');
    if (errorDiv) {
        errorDiv.innerText = error;
    } else {
     
        let div = document.createElement("div");
        div.id = "emailError";
        div.style.color = "red";
        div.innerText = error;
        document.body.appendChild(div);
    }

    return error === "";
}
