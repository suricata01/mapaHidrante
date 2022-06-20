
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDL3jQeFx055SzkHF8n0CJ7otoohzE7xRY",
      
//     authDomain: "mapa-nic.firebaseapp.com",
      
//     projectId: "mapa-nic",
          
//     databaseURL:"https://mapa-nic-default-rtdb.firebaseio.com/",
      
//     storageBucket: "mapa-nic.appspot.com",
      
//     messagingSenderId: "939501037240",
      
//     appId: "1:939501037240:web:b96845037bb8146769764d"
// };
// Initialize Firebase
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db =getDatabase();


// Ubicacion inicial del Mapa 
//Coordenadas de Nicaragua(Managua)
var map = L.map('map').setView([12.1508, -86.2683], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3VyaWNhdGEwMSIsImEiOiJjazFwaG5xcmkwMHBjM25sMzU4bTFnN3ZoIn0.OkDMjEiPWjbJB-w1FVxWwg'
}).addTo(map);

//Escribir Dato
    //   let obj = {
    //     name: "TF1",
    //     age: 25,
    //   };
    //   firebase.database().ref("users/user1").set(obj);
//Leer Dato
var gatos = firebase.database().ref("users/user1/age").once("value", (sanpshot) => {
    console.log(sanpshot.exportVal());
});
//Marcadores en el mapa
//var gato = {nombre:"1", age:"20"};
var marker = L.marker([12.1508, -86.2683]).addTo(map);
marker.bindPopup("I am a standalone popup." ).openPopup();
// var popup = L.popup()
//     .setLatLng([12.1508, -86.2683])
//     .setContent(gatos)
//     .openOn(map);
// var popup = L.popup();

// function onMapClick() {
//     popup
//         .setLatLng([12.1508, -86.2683])
//         .setContent(gatos)
//         .openOn(map);
// }

// map.on('click', onMapClick);
   
