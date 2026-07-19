let vpnFiles = JSON.parse(localStorage.getItem("vpnFiles")) || [];

function addVPN() {

    const name = document.getElementById("vpnName").value;
    const description = document.getElementById("vpnDescription").value;
    const status = document.getElementById("vpnStatus").value;
    const size = document.getElementById("vpnSize").value;
    const expire = document.getElementById("vpnExpire").value;


    if(name === "") {
        alert("Veuillez entrer un nom VPN");
        return;
    }


    const vpn = {
        id: Date.now(),
        name,
        description,
        status,
        size,
        expire,
        downloads: 0
    };


    vpnFiles.push(vpn);

    localStorage.setItem("vpnFiles", JSON.stringify(vpnFiles));


    displayVPN();


    alert("VPN ajouté avec succès");
}



function displayVPN(){

    const list = document.getElementById("vpnList");

    if(!list) return;


    list.innerHTML = "";


    if(vpnFiles.length === 0){
        list.innerHTML = "<p>Aucun fichier ajouté</p>";
        return;
    }


    vpnFiles.forEach(vpn => {

        list.innerHTML += `

        <div class="card">

        <h3>${vpn.name}</h3>

        <p>${vpn.description}</p>

        <p>Statut : ${vpn.status}</p>

        <p>Taille : ${vpn.size}</p>

        <p>Expiration : ${vpn.expire}</p>

        <button onclick="deleteVPN(${vpn.id})">
        🗑 Supprimer
        </button>

        </div>

        `;

    });

}



function deleteVPN(id){

    vpnFiles = vpnFiles.filter(vpn => vpn.id !== id);

    localStorage.setItem(
        "vpnFiles",
        JSON.stringify(vpnFiles)
    );


    displayVPN();
}



window.onload = displayVPN;
