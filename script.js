function generateCode() {
    let code = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("codeDisplay").textContent = code;
    document.getElementById("codeInput").value = "";
    document.getElementById("codeInput").style.color = "#555";
    document.getElementById("codeInput").classList.remove("failure");
}

function checkCode() {
    let generatedCode = document.getElementById("codeDisplay").textContent;
    let enteredCode = document.getElementById("codeInput").value;
    let codeInput = document.getElementById("codeInput");

    if (enteredCode === "") {
        codeInput.style.color = "#555";
        generateCode();
    }

    if (enteredCode === generatedCode) {
        codeInput.style.color = "#65b360";
        codeInput.classList.remove("failure");
    } else {
        codeInput.style.color = "#eb4646";
        codeInput.classList.add("failure");
    }
}
