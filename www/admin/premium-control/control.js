let premiumControl = JSON.parse(localStorage.getItem("premiumControl")) || [];


function savePremium(){

    const title = document.getElementById("premiumTitle").value;
    const price = document.getElementById("premiumPrice").value;
    const status = document.getElementById("premiumStatus").value;


    if(title === "" || price === ""){
        alert("Veuillez remplir les informations");
        return;
    }


    const offer = {
        id: Date.now(),
        title: title,
        price: price + " FCFA",
        status: status
    };


    premiumControl.push(offer);


    localStorage.setItem(
        "premiumControl",
        JSON.stringify(premiumControl)
    );


    alert("Offre Premium enregistrée");
}
let premiumFiles = JSON.parse(localStorage.getItem("premiumFiles")) || [];


function addPremiumFile(){

    const name = prompt("Nom du fichier Premium :");

    if(name === null || name === ""){
        return;
    }


    const file = {
        id: Date.now(),
        name: name,
        date: new Date().toLocaleDateString()
    };


    premiumFiles.push(file);


    localStorage.setItem(
        "premiumFiles",
        JSON.stringify(premiumFiles)
    );


    alert("Fichier Premium ajouté");
}
