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

    if(!liste) return;

    liste.innerHTML = "";

    vpnList.forEach((vpn, index) => {

        liste.innerHTML += `
        <div>
            🧪 ${vpn.nom}<br>
            📁 ${vpn.fichier}<br><br>

            <button onclick="modifierVPN(${index})">
                ✏️ Modifier
            </button>

            <button onclick="supprimerVPN(${index})">
                🗑️ Supprimer
            </button>
        </div>
        <hr>
        `;

    });
}


function supprimerVPN(index){

    vpnList.splice(index, 1);

    localStorage.setItem("vpnTest", JSON.stringify(vpnList));

    afficherVPN();
}


function modifierVPN(index){

    let nouveauNom = prompt(
        "Nouveau nom du VPN :",
        vpnList[index].nom
    );

    let nouveauFichier = prompt(
        "Nouveau fichier VPN :",
        vpnList[index].fichier
    );


    if(nouveauNom && nouveauFichier){

        vpnList[index].nom = nouveauNom;
        vpnList[index].fichier = nouveauFichier;

        localStorage.setItem(
            "vpnTest",
            JSON.stringify(vpnList)
        );

        afficherVPN();
    }
}


afficherVPN();
