const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const genPasswordsBtn = document.getElementById("gen-passwords-btn")
const passwordEl1 = document.getElementById("password-el-1")
const passwordEl2 = document.getElementById("password-el-2")

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function generatePassword(length = 15) {
    let password = ""
    for (i = 0; i <= length; i++) {
        password += characters[getRandomIndex(characters)]
    }
    return password
}

genPasswordsBtn.addEventListener("click", function () {
    passwordEl1.textContent = generatePassword()
    passwordEl2.textContent = generatePassword()
})