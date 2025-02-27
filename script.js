document.getElementById("register-btn").addEventListener("click", function () {
    document.getElementById("registration-popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("registration-popup").style.display = "none";
});

document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration Successful!");
    document.getElementById("registration-popup").style.display = "none";
});  