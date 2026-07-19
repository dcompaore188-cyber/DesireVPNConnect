function login() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const adminPassword = "2583";

    if (password === adminPassword) {
        message.style.color = "green";
        message.innerHTML = "Connexion réussie...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.innerHTML = "Mot de passe incorrect";
    }
}
function logout() {
    window.location.href = "index.html";
}
