let notifications = JSON.parse(localStorage.getItem("premiumNotifications")) || [];


function sendNotification(){

    const title = document.getElementById("notificationTitle").value;
    const message = document.getElementById("notificationMessage").value;
    const type = document.getElementById("notificationType").value;


    if(title === "" || message === ""){

        alert("Veuillez remplir les informations");
        return;

    }


    const notification = {

        id: Date.now(),
        title: title,
        message: message,
        type: type,
        date: new Date().toLocaleDateString()

    };


    notifications.push(notification);


    localStorage.setItem(
        "premiumNotifications",
        JSON.stringify(notifications)
    );


    displayNotifications();


    alert("Notification envoyée");

}



function displayNotifications(){

    const list = document.getElementById("notificationList");


    if(!list) return;


    list.innerHTML = "";


    if(notifications.length === 0){

        list.innerHTML = "<p>Aucune notification</p>";
        return;

    }



    notifications.forEach(notification => {


        list.innerHTML += `

        <div class="card">

        <h3>${notification.type}</h3>

        <h4>${notification.title}</h4>

        <p>${notification.message}</p>

        <small>${notification.date}</small>


        <button onclick="deleteNotification(${notification.id})">

        🗑 Supprimer

        </button>


        </div>

        `;


    });


}




function deleteNotification(id){


    notifications = notifications.filter(

        notification => notification.id !== id

    );


    localStorage.setItem(

        "premiumNotifications",

        JSON.stringify(notifications)

    );


    displayNotifications();


}



window.onload = displayNotifications;
