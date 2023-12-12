function generateCode() {
    let code = "";
    let characters = "0123456789";
    for (let i = 0; i < 5; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("codeDisplay").textContent = code;
    document.getElementById("codeInput").value = "";
    document.getElementById("codeInput").style.color = "#555";
}

function checkCode() {
    let generatedCode = document.getElementById("codeDisplay").textContent;
    let enteredCode = document.getElementById("codeInput").value;

    if (enteredCode === "") {
        document.getElementById("codeInput").style.color = "#555";
        generateCode();
    }

    if (enteredCode === generatedCode) {
        document.getElementById("codeInput").style.color = "#65b360";
    } else {
        document.getElementById("codeInput").style.color = "#eb4646";
    }
}