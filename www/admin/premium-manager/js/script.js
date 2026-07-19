let premium = JSON.parse(localStorage.getItem("premium")) || [];

function ajouterPremium(){

let nom=document.getElementById("nom").value;
let prix=document.getElementById("prix").value;
let duree=document.getElementById("duree").value;

if(nom=="" || prix=="" || duree==""){
alert("Remplir les champs");
return;
}

premium.push({nom,prix,duree});

localStorage.setItem("premium",JSON.stringify(premium));

afficherPremium();

}


function supprimerPremium(i){

premium.splice(i,1);

localStorage.setItem("premium",JSON.stringify(premium));

afficherPremium();

}


function afficherPremium(){

let liste=document.getElementById("liste");

liste.innerHTML="";

premium.forEach((p,i)=>{

liste.innerHTML += `
<div>
<h3>👑 ${p.nom}</h3>
<p>${p.prix} - ${p.duree}</p>
<button onclick="supprimerPremium(${i})">❌ Supprimer</button>
</div>
<hr>
`;

});

}

afficherPremium();
