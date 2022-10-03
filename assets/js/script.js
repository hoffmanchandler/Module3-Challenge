/* Selecting passwordOutput */
var passwordOutput = document.querySelector(".password-output");
/* Selecting button */
var button = document.querySelector(".button");
/* Global var holidng potential characters */
var possChar = "";

console.log("Hello")

/* Asing user for number of characters in password in a if-else loop */
var askChar = function() {
    var charNumb = window.prompt("Select a password lenght between 8 and 128 characters");
    /* Loop to give error when user inputs anything less than 8 or greater than 128 */
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

/* Asking user if they want upper case char in password */
var upperCharAsk = function() {
    var upperChar = window.confirm("Do you want upper case characters?");
    if (upperChar == true){
        /* Adding upper case char to global var string if user selects OK*/
        possChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
}

/* Asking user if they want lower case char in password */
var lowerCharAsk = function() {
    var lowerChar = window.confirm("Do you want lower case characters?");
    if (lowerChar == true){
        /* Adding lower case char to global var string if user selects OK*/
        possChar += "abcdefghijklmnopqrstuvwxyz"
    }
}

/* Asking user if they want numbers in password */
var numericCharAsk = function() {
    var numericChar = window.confirm("Do you want numbers?");
    if (numericChar == true){
        /* Adding numbers to possChar string if user selects OK */
        possChar += "0123456789"
    }
}

/* Asking user if they want special char in password */
var specialCharAsk = function() {
    var specialChar = window.confirm("Do you want special characters?");
    if (specialChar == true){
        /* Adding special characters to possChar string if user selects OK */
        possChar += "!@#$%^&*()_+=-/?.>,<`~"
    }
}

/* Function to create final password */
var createPassword = function(length) {
    var finalPassword = "";
    for(var i = 0; i < length; i++) {
        /* Generate random number */
        var randomNumber = Math.floor(Math.random() * possChar.length)
        /* creating variable to assign random number to a string entry */
        var randomChar = possChar[randomNumber];
        /* Printing out var in console to see if everything is working */
        console.log("random number", randomNumber, "random char", randomChar);
        /* Add character to final password string */
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