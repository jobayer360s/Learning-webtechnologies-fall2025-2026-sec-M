function validateDOB() {

    let dob = document.getElementById("dob").value;
    let error = "";
    if (dob === "") {
        error = "Date of Birth cannot be empty.";
    }
    document.getElementById("dobError").innerText = error;
    return error === "";
}
