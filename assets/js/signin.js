var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click', togglePass);

function togglePass() {

    eye.classList.toggle('active');

    (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}

// email dan pw
const correctEmail = "nfauzifirdaus@gmail.com";
const correctPassword = "NaufalFzFr28";

// Form Validation

function checkStuff(e) {
    e.preventDefault();
    var email = document.form1.email;
    var password = document.form1.password;
    var msg = document.getElementById('msg');


    // Check if the entered email and password are correct
    if (email.value === correctEmail && password.value === correctPassword) {
        window.location.href = "../../index.html";
        // Redirect to index.html
        // window.location.href = "index.html";
    } else if (email.value != correctEmail && password.value === correctPassword) {
        msg.style.display = 'block';
        msg.innerHTML = "Email yang anda masukkan salah";
    } else if (email.value === correctEmail && password.value != correctPassword) {
        msg.style.display = 'block';
        msg.innerHTML = "Password yang anda masukkan salah";
    } else if (email.value === '' && password.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = "Anda harus memasukkan email dan password anda";
    } else {
        msg.style.display = 'block';
        msg.innerHTML = "Email dan Password anda salah";
    }
}

document.form1.addEventListener('submit', checkStuff);
