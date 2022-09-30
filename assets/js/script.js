/* Selecting passwordOutput */
var passwordOutput = document.querySelector(".password-output");
/* Selecting button */
var button = document.querySelector(".button");
/* Global var holidng potential characters */
var possChar = "";

console.log("Hello")

var askChar = function() {
    var charNumb = window.prompt("Select a password lenght between 8 and 128 characters");
    if (charNumb <8){
        window.alert("Number selected is less than 8")
        askChar();
    }   else if (charNumb >128){
        window.alert("Number selected is greater than 128")
        askChar();
    }   else {
        return charNumb;
    }
}

var upperCharAsk = function() {
    var upperChar = window.confirm("Do you want upper case characters?");
    if (upperChar == true){
        possChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
}

var lowerCharAsk = function() {
    var lowerChar = window.confirm("Do you want lower case characters?");
    if (lowerChar == true){
        possChar += "abcdefghijklmnopqrstuvwxyz"
    }
}

var numericCharAsk = function() {
    var numericChar = window.confirm("Do you want numbers?");
    if (numericChar == true){
        possChar += "0123456789"
    }
}

var specialCharAsk = function() {
    var specialChar = window.confirm("Do you want special characters?");
    if (specialChar == true){
        possChar += "!@#$%^&*()_+=-/?.>,<`~"
    }
}

var createPassword = function(length) {
    var finalPassword = "";
    for(var i = 0; i < length; i++) {
        /* Generate random number */
        var randomNumber = Math.floor(Math.random() * possChar.length)
        var randomChar = possChar[randomNumber];
        console.log("random number", randomNumber, "random char", randomChar);
        finalPassword += randomChar
        console.log(finalPassword)
    }
    return finalPassword;
}

/*Creating a function to generate password when ran */
function writePassword(event){
    /*var password = generatePassword();*/
    /* Ask user question on password criteria */
    var passLength = askChar();
    upperCharAsk();
    lowerCharAsk();
    numericCharAsk();
    specialCharAsk();
    /* use passlength to generate random char from possChar */
    var finalfinalpassword = createPassword(passLength);
    /*event.stopPropagation();*/

    passwordOutput.textContent = finalfinalpassword;

}


/*Assign code to listen and execute function when button is pressed */
button.addEventListener("click", writePassword);