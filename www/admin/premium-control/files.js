let premiumFiles = JSON.parse(localStorage.getItem("premiumFiles")) || [];


function addPremiumFile(){

    const name = document.getElementById("fileName").value;
    const version = document.getElementById("fileVersion").value;
    const link = document.getElementById("fileLink").value;


    if(name === "" || version === ""){
        alert("Veuillez remplir les informations");
        return;
    }


    const file = {

        id: Date.now(),
        name: name,
        version: version,
        link: link,
        date: new Date().toLocaleDateString()

    };


    premiumFiles.push(file);


    localStorage.setItem(
        "premiumFiles",
        JSON.stringify(premiumFiles)
    );


    displayFiles();


    alert("Fichier Premium ajouté");
}



function displayFiles(){

    const list = document.getElementById("fileList");

    if(!list) return;


    list.innerHTML = "";


    if(premiumFiles.length === 0){

        list.innerHTML = "<p>Aucun fichier</p>";
        return;

    }


    premiumFiles.forEach(file => {

        list.innerHTML += `

        <div class="card">

        <h3>⭐ ${file.name}</h3>

        <p>Version : ${file.version}</p>

        <p>Date : ${file.date}</p>

        <button onclick="deleteFile(${file.id})">
        🗑 Supprimer
        </button>

        </div>

        `;

    });

}



function deleteFile(id){

    premiumFiles = premiumFiles.filter(
        file => file.id !== id
    );


    localStorage.setItem(
        "premiumFiles",
        JSON.stringify(premiumFiles)
    );


    displayFiles();

}



window.onload = displayFiles;
