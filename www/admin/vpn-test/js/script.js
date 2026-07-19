let vpnList = JSON.parse(localStorage.getItem("vpnTest")) || [];

function ajouterVPN(){

    let nom = document.getElementById("nom").value;
    let fichier = document.getElementById("fichier").value;

    if(nom === "" || fichier === ""){
        alert("Remplis tous les champs");
        return;
    }

    vpnList.push({
        nom: nom,
        fichier: fichier
    });

    localStorage.setItem("vpnTest", JSON.stringify(vpnList));

    afficherVPN();

    alert("VPN Test ajouté");
}


function afficherVPN(){

    let liste = document.getElementById("listeVPN");
    liste.innerHTML = "";

    vpnList.forEach(vpn => {

        liste.innerHTML += `
        <div>
        🧪 ${vpn.nom}<br>
        📁 ${vpn.fichier}
        </div>
        <hr>
        `;

    });
}

afficherVPN();
