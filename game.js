function showScreen(screenName) {
    document.querySelector(".menu").style.display = "none";

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.style.display = "none";
    });

    if (screenName === "menu") {
        document.querySelector(".menu").style.display = "block";
    } else {
        document.getElementById(screenName).style.display = "block";
    }
}

function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    alert("Account system is ready for the next step!");
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        alert("Please enter your username and password.");
        return;
    }

    alert("Login system is ready for the next step!");
}

console.log("Rainfall game loaded!");
