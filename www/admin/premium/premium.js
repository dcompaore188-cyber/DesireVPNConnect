let premiumOffers = JSON.parse(localStorage.getItem("premiumOffers")) || [];


function addPremium(){

    const name = document.getElementById("offerName").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;


    if(name === "" || price === ""){
        alert("Veuillez remplir tous les champs");
        return;
    }


    const offer = {

        id: Date.now(),
        name: name,
        price: price + " FCFA",
        status: status

    };


    premiumOffers.push(offer);


    localStorage.setItem(
        "premiumOffers",
        JSON.stringify(premiumOffers)
    );


    displayPremium();


    alert("Offre Premium ajoutée");
}



function displayPremium(){

    const list = document.getElementById("premiumList");


    if(!list) return;


    list.innerHTML = "";


    if(premiumOffers.length === 0){

        list.innerHTML = "<p>Aucune offre</p>";
        return;

    }


    premiumOffers.forEach(offer => {


        list.innerHTML += `

        <div class="card">

        <h3>⭐ ${offer.name}</h3>

        <p>Prix : ${offer.price}</p>

        <p>État : ${offer.status}</p>


        <button onclick="deletePremium(${offer.id})">
        🗑 Supprimer
        </button>


        </div>

        `;


    });

}



function deletePremium(id){

    premiumOffers = premiumOffers.filter(
        offer => offer.id !== id
    );


    localStorage.setItem(
        "premiumOffers",
        JSON.stringify(premiumOffers)
    );


    displayPremium();

}



window.onload = displayPremium;
