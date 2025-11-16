function validateGender() {
 var radios = document.getElementsByName('gender');
 var error = "At least one must be selected.";
 for (var i = 0; i < radios.length; i++) {
   if (radios[i].checked) {
     error = "";
     break;
   }
 }
 document.getElementById('genderError').innerText = error;
 return error === "";
}