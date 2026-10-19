function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var name = document.getElementById("city").value;



    var validName = /^[A-Za-z]+$/.test(name);
    var validAge = /^[0-9]+$/.test(age);
    var validCity = city !== "";

    showError("name", validName);
    showError("age", validAge);
    showError("city", validCity);



}
function showError(id,isValid){

    document.getElementById(id +"_error").style.visibility=
    isValid ?"hidden": "visible";

    document.getElementById(id +"_error").style.borderColor=
    isValid ?"black": "red";
}
