let orders = JSON.parse(localStorage.getItem("premiumOrders")) || [];


function addOrder(){

    const client = document.getElementById("clientName").value;
    const offer = document.getElementById("offer").value;
    const status = document.getElementById("orderStatus").value;


    if(client === ""){
        alert("Veuillez entrer le nom du client");
        return;
    }


    const order = {

        id: Date.now(),
        client: client,
        offer: offer,
        status: status,
        date: new Date().toLocaleDateString()

    };


    orders.push(order);


    localStorage.setItem(
        "premiumOrders",
        JSON.stringify(orders)
    );


    displayOrders();


    alert("Commande ajoutée");
}



function displayOrders(){

    const list = document.getElementById("orderList");

    if(!list) return;


    list.innerHTML = "";


    if(orders.length === 0){

        list.innerHTML = "<p>Aucune commande</p>";
        return;

    }


    orders.forEach(order => {

        list.innerHTML += `

        <div class="card">

        <h3>🛒 ${order.client}</h3>

        <p>Offre : ${order.offer}</p>

        <p>Statut : ${order.status}</p>

        <p>Date : ${order.date}</p>

        <button onclick="deleteOrder(${order.id})">
        🗑 Supprimer
        </button>

        </div>

        `;

    });

}



function deleteOrder(id){

    orders = orders.filter(
        order => order.id !== id
    );


    localStorage.setItem(
        "premiumOrders",
        JSON.stringify(orders)
    );


    displayOrders();

}


window.onload = displayOrders;
