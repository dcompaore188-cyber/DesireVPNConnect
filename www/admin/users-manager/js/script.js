let users = JSON.parse(localStorage.getItem("users")) || [];

function ajouterUser(){

let nom=document.getElementById("nom").value;
let email=document.getElementById("email").value;

if(nom=="" || email==""){
alert("Remplir les champs");
return;
}

users.push({nom,email});

localStorage.setItem("users",JSON.stringify(users));

afficherUsers();

}


function supprimerUser(i){

users.splice(i,1);

localStorage.setItem("users",JSON.stringify(users));

afficherUsers();

}


function afficherUsers(){

let liste=document.getElementById("liste");

liste.innerHTML="";

users.forEach((u,i)=>{

liste.innerHTML += `
<div>
<h3>👤 ${u.nom}</h3>
<p>${u.email}</p>
<button onclick="supprimerUser(${i})">❌ Supprimer</button>
</div>
<hr>
`;

});

}

afficherUsers();
