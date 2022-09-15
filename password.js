let displayPassword1 = document.getElementById("display1")
let displayPassword2 = document.getElementById("display2")
let password1 = []
let password2 = []
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","`","~","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","'",",","<",".",">","/","?","1","2","3","4","5","6","7","8","9","0"]

const passwordLength = 15
const allowedCharacterLength = characters.length

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*characters.length)
    return randomNumber;
}

function generatePassword() {
    
    for (i = 0; i < passwordLength; i++) {
        let passLetter = characters[getRandomNumber(allowedCharacterLength)]
        password1.push(passLetter)
    }

    for (i = 0; i < passwordLength; i++) {
        let passLetter = characters[getRandomNumber(allowedCharacterLength)]
        password2.push(passLetter)
    }

    displayPassword1.textContent = password1.join("");
    displayPassword2.textContent = password2.join("");
}