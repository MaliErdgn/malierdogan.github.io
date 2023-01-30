const passInput = document.getElementById("passwordInput");
const passSubmit = document.getElementById("passwordSubmit");
const passAnswer = document.getElementById("passwordAnswer");
const maindiv = document.getElementById("grid-container")

passSubmit.addEventListener("click", login);

function login () {
    if (passInput.value == "nusret") {
        console.log("ksnd")
        window.location.replace("./bros.html")
    } else {  
        passAnswer.innerText = "Wrong Password" 
    }
}