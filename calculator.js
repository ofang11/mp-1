// calculator.js

function getNums() {
    const a = Number(document.getElementById("first-number").value);
    const b = Number(document.getElementById("second-number").value);
    return { a, b };
}

function render(result) {
    const out = document.getElementById("output");
    out.innerHTML = String(result);

    out.style.color = (Number(result) < 0) ? "red" : "";
}

function addition() {
    const { a, b } = getNums();
    render(a + b);
}

function subtraction() {
    const { a, b } = getNums();
    render(a - b);
}

function multiplication() {
    const { a, b } = getNums();
    render(a * b);
}

function division() {
    const { a, b } = getNums();
    render(a / b);
}

function power() {
    const { a, b } = getNums();

    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }

    render(result);
}

function clearAll() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "";
}