function negrito() {
    document.getElementById("texto").style.fontWeight = "bold";

}

function italico() {
    let textArea = document.getElementById("texto");
    textArea.style.fontStyle = textArea.style.fontStyle === "italic" ? "normal" : "italic";
}

function left() {
    document.getElementById("texto").style.textAlign = "left";
}

function center() {
    document.getElementById("texto").style.textAlign = "center";
}

function right() {
    document.getElementById("texto").style.textAlign = "right";
}

function uppercase() {
    document.getElementById("texto").style.textTransform = "uppercase";
}

function lowercase() {
    document.getElementById("texto").style.textTransform = "lowercase";
}

function capitalize() {
    document.getElementById("texto").style.textTransform = "capitalize";
}

function limparTexto () {
    let textArea = document.getElementById("texto");
    textArea.style.fontWeight = "normal";
    textArea.style.fontStyle = "normal";
    textArea.style.textAlign = "left";
    textArea.style.textTransform = "none";
    textArea.value = ""; 
}
