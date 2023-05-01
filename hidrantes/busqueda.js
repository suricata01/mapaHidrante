import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getDatabase, get, ref, set ,child, update,remove,query,onValue,limitToLast } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCprkz2yWcfAqYehFHIAPhcwCK7cvyA0-c",
    authDomain: "ejemplo1-mapa.firebaseapp.com",
    databaseURL: "https://ejemplo1-mapa-default-rtdb.firebaseio.com",
    projectId: "ejemplo1-mapa",
    storageBucket: "ejemplo1-mapa.appspot.com",
    messagingSenderId: "984062869959",
    appId: "1:984062869959:web:7e6edc5f988a19777199e2"
    };

//declaracion de variable de uso de la BD
const app = initializeApp(firebaseConfig);
const db =getDatabase();

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
var Altagracia1 = L.marker([12.133522,-86.292174]).addTo(map);
var Altagracia2 = L.marker([12.133646,-86.293739]).addTo(map);

function SelectData(){
    const dbref = ref(db);
    get(child(dbref,"Hidrantes/1" )).then((snapshot)=>{
        if(snapshot.exists()){
            let alarma = snapshot.val().NameofStd;
            let presion = snapshot.val().RollNo;
            marker.bindPopup("<h5>Ubicacion: " + alarma + "</h5>"+
                            "<h5>Presion: " + presion + " PSI</h5>").openPopup();

        }
        else{
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert("unsuccessful ,error" + error);
    });
}
function GetAllDataRealtime()
    {
        const dbRef = query(ref(db,"Hidrantes/9"),limitToLast(3));
        onValue(dbRef,(snapshot)=>{
                    var students=[];

                    snapshot.forEach(childSnapshot=> {
                    students.push(childSnapshot.val());
                });
                var alarma =Object.values(students[0]);
                var presion =Object.values(students[1]);
                var AlarmLast = alarma[alarma.length - 1];
                var PresionLast = presion[presion.length - 1];
            console.log(alarma);
            console.log(presion);
            // let alarma = snapshot.val().Alarm;
            // let presion = snapshot.val().presion;
             marker.bindPopup("<h5>Alarma: " + AlarmLast + "</h5>"+
                                "<h5>Presion: " + PresionLast + "</h5>").openPopup();
        })
    }  
// marker.addEventListener('click',SelectData);
document.getElementById("SelectLocation").addEventListener('change',function(e){
    let Coordenadas =e.target.value.split(",");
    map.flyTo(Coordenadas,17)
})
// se coloca map.on para cuando se usa una funcion y el marcador funcione una y otra vez 
map.on('click',GetAllDataRealtime);
//window.onload=GetAllDataRealtime;