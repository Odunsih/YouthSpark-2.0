let select = document.getElementById('select');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');

function direct() {
    if (select.value == option1.value) {
        window.location.href = "fellow-sign-up.html";
    }
    if (select.value == option2.value) {
        window.location.href = "org-sign-up.html";
    }
}