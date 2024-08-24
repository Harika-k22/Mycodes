const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
const morseCode = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.",
    "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
    "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "/"
];

function convertToMorse() {
    try {
        const input = document.getElementById("textInput");
        const letters = input.value.split("");
        const code = letters.map(letter => morseCode[alphabet.indexOf(letter.toUpperCase())] || "").join(" ");
        input.value = code;
    } catch (e) {
        console.log(e);
    }
}

function convertToLetter() {
    try {
        const input = document.getElementById("textInput");
        const morse = input.value.split(" ");
        const letters = morse.map(code => alphabet[morseCode.indexOf(code)] || "").join("");
        input.value = letters;
    } catch (e) {
        console.log(e);
    }
}

function showAlert() {
    alert("Thank you! Your feedback has been submitted.");
    return true;  
}
