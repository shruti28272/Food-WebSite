function validate(){
    var name=document.forms.name.value;
    var password=document.forms.name.value;
    if(name==null|| name==""){
    alert("name can't be empty!");
    return false;
     } else if(password.length<4){
        alert("passward must be at least 6 characters");
        return false;

    

}
}