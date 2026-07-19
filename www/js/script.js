// Désiré VPN Connect

document.querySelector(".connect").addEventListener("click", function() {
    alert("Connexion VPN en préparation...");
});

const boutons = document.querySelectorAll(".menu button");

boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        alert("Ouverture de : " + bouton.innerText);
    });
});
