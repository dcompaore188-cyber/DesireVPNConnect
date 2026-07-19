let vpn = JSON.parse(localStorage.getItem("vpn")) || [];

function ajouterVPN(){

let nom = document.getElementById("nom").value;
let config = document.getElementById("config").value;

if(nom=="" || config==""){
alert("Remplir les champs");
return;
}

vpn.push({nom,config});

localStorage.setItem("vpn",JSON.stringify(vpn));

afficherVPN();

}


function supprimerVPN(index){

vpn.splice(index,1);

localStorage.setItem("vpn",JSON.stringify(vpn));

afficherVPN();

}


function afficherVPN(){

let liste=document.getElementById("liste");

liste.innerHTML="";

vpn.forEach((v,i)=>{

liste.innerHTML += `
<div>
<h3>🧪 ${v.nom}</h3>
<p>${v.config}</p>
<button onclick="supprimerVPN(${i})">❌ Supprimer</button>
</div>
<hr>
`;

});

}

afficherVPN();
