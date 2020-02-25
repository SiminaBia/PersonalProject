var userName = document.getElementById('lname');
var userEmail = document.getElementById('email');
var inputSubject = document.getElementById('subject');
var inputMessage = document.getElementById('message');
var button = document.querySelector('.submit-button');
var ValideCharacter = /^[A-Za-z]+$/;
var InValideCharacter = /^[0-9]+$/;
var ValideEmail = /\S+@\S+\.\S+/; //checks for space before&after @ 
userName.addEventListener('change', checkInput)

var validators = {
    email: function(input) {
        // validate a input with email
    }
}
function checkInput(event) {
    console.log({ event })

    let v = event.target.target.data('validators')
    if (validators[v](event.target))
    if (event.target.type == 'text') {
        //validation for text fields
    }

    if (event.target.type == 'email') {
        //validation for email fields
    }

    if (userName.value.match(InValideCharacter)) {
        userName.style.backgroundColor = "red";
        button.disable = true;
        return false;
    }

    if (inputSubject.value.match(InValideCharacter)) {
        inputSubject.style.backgroundColor = "red"; 
        button.disable = true;
        alert("wrong subjecgt")
        return false;
    }
    if (!ValideEmail.test(userEmail.value)) {
        userEmail.style.backgroundColor = "red";
        button.disable = true;
        return false;
    }
    /*else if (inputMessage.value == "") {
         inputMessage.style.backgroundColor = "red";
         
         return false;
         }      */
    if (userName.value.match(ValideCharacter) && ValideEmail.test(userEmail.value) &&
        inputSubject.value.match(ValideCharacter) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = 'red';
        button.disable = false;
    }


} 
