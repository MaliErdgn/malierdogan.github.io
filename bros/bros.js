const passInput = document.getElementById("passwordInput");
const passSubmit = document.getElementById("passwordSubmit");
const passAnswer = document.getElementById("passwordAnswer");
const maindiv = document.getElementById("grid-container")

passSubmit.addEventListener("click", login);

function login () {
    if (passInput.value == "nusret") {
        passInput.style.display = "none";
        passSubmit.style.display = "none";
        passAnswer.style.display = "none";
        maindiv.style.display = "grid";
    } else {  
        passAnswer.innerText = "Wrong Password"
    }
}