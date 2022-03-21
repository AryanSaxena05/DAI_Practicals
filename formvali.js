function validateFrom()
{
    var fname = document.forms["form"]["firstName"];
    var mobile = document.forms["form"]["mobile"];
    var email = document.forms["form"]["email"]
    var pass = document.forms["form"]["password"]
    if(fname.value = "") {
        window.alert("Enter first name");
        fname.focus();
        return false;
    }
    if(fname.value = "") {
        window.alert("Enter first name");
        fname.focus();
        return false;
    }
    if(mobile.value ="")
    {
        window.alert("Enter mobile number");
        mobile.focus();
        return false;
    }
    if(mobile.value.length <10 || mobile.value.length >10){
        window.alert("Enter 10 digit number");
        mobile.focus();
        return false;
    } 
    if(email.value =""){
        window.alert("Enter email");
        email.focus();
        return false;
    }
    if(pass.value.length < 6){
        window.alert("Enter a password greater than 5 characters");
        pass.focus();
        return false;
    }
    if(pass.value = "")
    {
        window.alert("Enter password");
        pass.focus();
        return false
    }
    return true;
}