async function verifierMiseAJour(){

try{

let response = await fetch("../../api/version.json");

let data = await response.json();

let versionActuelle = "1.0.0";


if(data.version !== versionActuelle){

alert("🔄 Nouvelle mise à jour disponible : " + data.version);

}
else{

console.log("Application à jour");

}

}

catch(error){

console.log("Erreur de vérification");

}

}


verifierMiseAJour();
