      // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDL3jQeFx055SzkHF8n0CJ7otoohzE7xRY",
  
    authDomain: "mapa-nic.firebaseapp.com",
  
    projectId: "mapa-nic",
      
    databaseURL:"https://mapa-nic-default-rtdb.firebaseio.com/",
  
    storageBucket: "mapa-nic.appspot.com",
  
    messagingSenderId: "939501037240",
  
    appId: "1:939501037240:web:b96845037bb8146769764d"
      };
      // Initialize Firebase
firebase.initializeApp(firebaseConfig);

      // Add data
    //   let obj = {
    //     name: "TF2",
    //     age: 22,
    //   };
    //   firebase.database().ref("users/user1").set(obj);

//      // read data
// var gatos = firebase.database().ref("users/user1").on("value", (sanpshot) => {
//     console.log(sanpshot.toJSON());
// });


      // update data
    //   let newupdateddata = {
    //     name: "TF0",
    //   };
    //   firebase.database().ref("users/user3").update(newupdateddata);

      // remove data
      //firebase.database().ref("users/user3").remove();