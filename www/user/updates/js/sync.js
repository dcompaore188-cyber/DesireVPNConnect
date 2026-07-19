async function synchroniserVPN(){

try{

let response = await fetch("../../api/vpn-configs.json");

let data = await response.json();

localStorage.setItem(
"vpn_servers",
JSON.stringify(data.vpn_servers)
);

console.log("Synchronisation VPN réussie");

}

catch(error){

console.log("Erreur synchronisation VPN");

}

}


synchroniserVPN();
