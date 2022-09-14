// Configuracion del mapa
var map = L.map('map').setView([12.1508, -86.2683], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3VyaWNhdGEwMSIsImEiOiJjazFwaG5xcmkwMHBjM25sMzU4bTFnN3ZoIn0.OkDMjEiPWjbJB-w1FVxWwg'
}).addTo(map);

var marker = L.marker([12.1508, -86.2683]).addTo(map);
//marker.bindPopup("I am a standalone popup." ).openPopup();
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
function SelectData(){
    const dbref = ref(db);
    get(child(dbref,"Hidrantes/1" )).then((snapshot)=>{
        if(snapshot.exists()){
            namebox.value = snapshot.val().NameofStd;
            rollbox.value =snapshot.val().RollNo;
            secbox.value = snapshot.val().Section;
            genbox.value = snapshot.val().Gender;
            marker.bindPopup( snapshot.val().NameofStd + "<br>" + snapshot.val().RollNo ).openPopup();

        }
        else{
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert("unsuccessful ,error" + error);
    });
}
// marker.addEventListener('click',SelectData);
document.getElementById("SelectLocation").addEventListener('change',function(e){
    let Coordenadas =e.target.value.split(",");
    map.flyTo(Coordenadas,17)
})