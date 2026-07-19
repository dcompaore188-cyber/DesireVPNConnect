let annonces = JSON.parse(localStorage.getItem("annonces")) || [];

function ajouterAnnonce(){

let message=document.getElementById("message").value;

if(message==""){
alert("Écrire une annonce");
return;
}

annonces.push(message);

localStorage.setItem("annonces",JSON.stringify(annonces));

afficherAnnonces();

}


function supprimerAnnonce(i){

annonces.splice(i,1);

localStorage.setItem("annonces",JSON.stringify(annonces));

afficherAnnonces();

}


function afficherAnnonces(){

let liste=document.getElementById("liste");

liste.innerHTML="";

annonces.forEach((a,i)=>{

liste.innerHTML += `
<div>
<p>📢 ${a}</p>
<button onclick="supprimerAnnonce(${i})">❌ Supprimer</button>
</div>
<hr>
`;

});

}

afficherAnnonces();
