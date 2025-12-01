function validateData(){
  var name = document.getElementById("a").value;
  var age = document.getElementById("b").value;
  var phone = document.getElementById("c").value;
  var password1 = document.getElementById("d").value;
  var password2 = document.getElementById("e").value;

 
  if(name ==""|| age==""||phone ==""||password1 ==""||password2=="")
    {
    alert("All field Must Be filled");
    return false;
    }
    else if(!isNaN(name)){
    alert("Name cannot be a number");
    return false;
    }
    else if(isNaN(age)){
     alert("Enter a valid age ")
    }

   else if(isNaN(phone)|| phone.length != 11){
    alert("Enter a valid Phone Number ");
    return false;
    }

    else if (password1 != password2){
        alert("Passwords Must Be same ")
        return false;
    }

    else{
        return true;
    }

}