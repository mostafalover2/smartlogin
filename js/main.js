
var Signup = document.getElementById("Signup");
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var MessageFail = document.querySelector(" .MessageFail");
var MessageSuccess = document.querySelector(" .MessageSuccess");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var login = document.getElementById("login");
var message = document.querySelector(" .message");
var incorrect = document.querySelector(" .incorrect");
var username = document.getElementById("username");
var personContainer;
console.log(username);
if (localStorage.getItem("person") == null) {
    personContainer = [];
} else {
    personContainer = JSON.parse(localStorage.getItem("person"));
}

if (Signup != null) {
    Signup.addEventListener("click", function () {
        AddPerson();
    })
}



function AddPerson() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        MessageFail.classList.replace("d-none", "d-block");
    } else if (signUpName.value != "" && signUpEmail.value != "" && signUpPassword.value != "") {
        MessageFail.classList.replace("d-block", "d-none");
        var person = {
            name: signUpName.value,
            email: signUpEmail.value,
            pass: signUpPassword.value,
        }
        personContainer.push(person);
        localStorage.setItem("person", JSON.stringify(personContainer));
        MessageSuccess.classList.replace("d-none", "d-block");
        clear();
    
        location.href = "index.html";
    }

   
}




if (login != null) {
    login.addEventListener("click", function () {
        checkPerson();
    })
}

function checkPerson() {
    if (signUpEmail.value != "" && signUpPassword.value != "") {
        message.classList.replace("d-block", "d-none");
        if (check()) {
            incorrect.classList.replace("d-block", "d-none");
            location.href="index.html"
         
        }
        else {
            incorrect.classList.replace("d-none", "d-block");
        }
    } else {
        message.classList.replace("d-none", "d-block");
    }

}



function check() {

    for (var i = 0; i < personContainer.length; i++) {
        if (personContainer[i].email.toLowerCase() == signUpEmail.value.toLowerCase() && personContainer[i].pass.toLowerCase() == signUpPassword.value.toLowerCase()) {
          localStorage.setItem("name",JSON.stringify(personContainer[i].name));
            return true
        }
    }
}



function Addname(){
    var userName=JSON.parse(localStorage.getItem("name"));
    console.log(userName);
    document.getElementById("username").innerHTML = `welcom ${userName}`;
}
document.getElementById("logout").addEventListener("click",function(){
    localStorage.removeItem("name");
})


function clear() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}