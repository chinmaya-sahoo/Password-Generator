const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$()&+-=[]{}<>/*~^_%" ;
const allChars = upperCase + lowerCase + number + symbol;

function getRandomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

function generatePassword() {
    let password = '';
    password += getRandomChar(upperCase);
    password += getRandomChar(lowerCase);
    password += getRandomChar(number);
    password += getRandomChar(symbol);

    while(length > password.length) {
        password += getRandomChar(allChars);
    }
    passwordBox.value = password;
}
const button = document.querySelector('button');
button.addEventListener('click', generatePassword, false);

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}

document.getElementById('copy').addEventListener('click', copyPassword, false);