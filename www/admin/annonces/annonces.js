let announcements = JSON.parse(localStorage.getItem("announcements")) || [];


function addAnnouncement(){

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const type = document.getElementById("type").value;


    if(title === "" || content === ""){
        alert("Veuillez remplir tous les champs");
        return;
    }


    const announcement = {

        id: Date.now(),
        title: title,
        content: content,
        type: type,
        date: new Date().toLocaleDateString()

    };


    announcements.push(announcement);


    localStorage.setItem(
        "announcements",
        JSON.stringify(announcements)
    );


    displayAnnouncements();


    alert("Annonce publiée");
}



function displayAnnouncements(){

    const list = document.getElementById("announcementList");


    if(!list) return;


    list.innerHTML = "";


    if(announcements.length === 0){

        list.innerHTML = "<p>Aucune annonce</p>";
        return;

    }


    announcements.forEach(item => {


        list.innerHTML += `

        <div class="card">

        <h3>${item.type}</h3>

        <h4>${item.title}</h4>

        <p>${item.content}</p>

        <small>${item.date}</small>

        <br><br>

        <button onclick="deleteAnnouncement(${item.id})">
        🗑 Supprimer
        </button>


        </div>

        `;


    });

}



function deleteAnnouncement(id){

    announcements = announcements.filter(
        item => item.id !== id
    );


    localStorage.setItem(
        "announcements",
        JSON.stringify(announcements)
    );


    displayAnnouncements();

}



window.onload = displayAnnouncements;
