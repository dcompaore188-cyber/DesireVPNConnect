let stats = JSON.parse(localStorage.getItem("vpnStats")) || {

    totalDownloads: 0,
    todayDownloads: 0,
    weekDownloads: 0,
    monthDownloads: 0,

    topVPN: "Aucun",
    topFile: "Aucun",

    visits: 0,
    whatsappClicks: 0,
    reports: 0

};



function loadStats(){

    document.getElementById("totalDownloads").innerText =
    stats.totalDownloads;


    document.getElementById("todayDownloads").innerText =
    stats.todayDownloads;


    document.getElementById("weekDownloads").innerText =
    stats.weekDownloads;


    document.getElementById("monthDownloads").innerText =
    stats.monthDownloads;


    document.getElementById("topVPN").innerText =
    stats.topVPN;


    document.getElementById("topFile").innerText =
    stats.topFile;


    document.getElementById("visits").innerText =
    stats.visits;


    document.getElementById("whatsappClicks").innerText =
    stats.whatsappClicks;


    document.getElementById("reports").innerText =
    stats.reports;

}



function addDownload(vpn, file){

    stats.totalDownloads++;

    stats.todayDownloads++;

    stats.weekDownloads++;

    stats.monthDownloads++;


    stats.topVPN = vpn;

    stats.topFile = file;


    saveStats();

}



function addVisit(){

    stats.visits++;

    saveStats();

}



function addWhatsappClick(){

    stats.whatsappClicks++;

    saveStats();

}



function addReport(){

    stats.reports++;

    saveStats();

}



function saveStats(){

    localStorage.setItem(
        "vpnStats",
        JSON.stringify(stats)
    );


    loadStats();

}



window.onload = loadStats;
