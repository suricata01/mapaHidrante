 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDAPiT0RBTV92RwY_o6viZPygfBbWXui0M",
    authDomain: "monografia-4895b.firebaseapp.com",
    projectId: "monografia-4895b",
    storageBucket: "monografia-4895b.appspot.com",
    messagingSenderId: "807158163486",
    appId: "1:807158163486:web:c12e6bcfb6f0a475bb260f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  import { getDatabase, get, ref, set ,child, update,remove } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
  const db =getDatabase();
  
  function SelectData(){
    const dbref = ref(db);
    get(child(dbref,"Hidrantes/1" )).then((snapshot)=>{
        if(snapshot.exists()){
            namebox.value = snapshot.val().NameofStd;
            rollbox.value =snapshot.val().RollNo;
            secbox.value = snapshot.val().Section;
            genbox.value = snapshot.val().Gender;
            marker.bindPopup("<h4>Ubicacion: " + snapshot.val().NameofStd + "</h4>"+
                            "<h4>Presion: " + snapshot.val().RollNo + " PSI</h4>").openPopup();

        }
        else{
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert("unsuccessful ,error" + error);
    });
}
marker.addEventListener('click',SelectData);
