let next = $('#next')
let prev = $('#prev')
let container = $('#container')

let x = 0

container.css({
    left: x + '%'
})

let threshold = 300
prev.on('click', function(){
    if(x < threshold) x = x + 100
    else x = 0
    container.css({
        'left': -x+'%'
    })
})

next.on('click', function(){
    if(x > 0) x = x - 100
    else x = threshold
    container.css({
        'left': -x+'%'
    })
})

function validate(){
    //alert('test')
    var password= document.getElementById("register_password").value
    var confirm_password= document.getElementById("register_confirm_password").value
    var email= document.getElementById("register_email").value
    var gender_male= document.getElementById("register_gender_male").checked
    var gender_female= document.getElementById("register_gender_female").checked
    var errorMsg= document.getElementById("errorMsg")
    var plan= document.getElementById("register_plan").value
    var agreement= document.getElementById("register_agreement").checked

    if(email ==''){
        errorMsg.innerHTML = "Email must be filled";
    }
    else if(!email.endsWith(".com")){
        errorMsg.innerHTML = "Email must be end with.com";
    }
    else if(email.indexOf ('@') == -1){
        errorMsg.innerHTML = "Email must be contains @";
    }  
    else if(email.split('@').length > 2){
        errorMsg.innerHTML = "Email must be contains only 1@";
    }  
    else if(password.length < 6 || password.length>15){
        errorMsg.innerHTML = "Password must be 6-15 characters";
    }
    else if(confirm_password == ''){
        errorMsg.innerHTML = "Confirm password must be filled";
    }
    else if(confirm_password != password){
        errorMsg.innerHTML = "Confirm password must be the same with password";
    }
    else if(!gender_male && !gender_female){
        errorMsg.innerHTML = "Gender must be chosen";
    }     
    else if(plan == ''){
        errorMsg.innerHTML = "Plan must be chosen";
    }   
    else if(!agreement){
        errorMsg.innerHTML = "Agreement must be checked";
    }     
    else{
        errorMsg.innerHTML = "";
        var gender= ""
        if(gender_male){
            gender = "Male"
        }
        else if(gender_female){
            gender = "Female"
        }
        if(confirm("Email: " + email + "\n Gender: " + gender + "\n Plan : " + plan + "\n\n Are you Sure ?"))
            alert("Succesfully Subscribe !")
            window.location.href = "index.html"
    }
}

function validateAlphaNum(username){
    var flagAlpha = 0;
    var flagNum = 0;
    for(var i = 0 ; i<username.length; i++){
        if((username.charCodeAt(i) >= 65 && username.charCodeAt(i) <=90)
        || (username.charCodeAt(i) >= 97 && username.charCodeAt(i) <=122))
        flagAlpha = 1;
        else if(username.charCodeAt(i) >= 48 && username.charCodeAt(i) <=57){
            flagNum = 1;
        }
    }
    if(flagNum == 1 && flagAlpha == 1){
        return true;
    }
    else {
        return false;
    }
}
