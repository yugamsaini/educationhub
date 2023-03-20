// seeting up the firebase with website

const firebaseApp = firebase.initializeApp({ /* Firebase config */
apiKey: "AIzaSyDS7F5frDI3FDStE6uzTdv68huGZ4Fy-zk",
  authDomain: "auth-form-e68a8.firebaseapp.com",
  projectId: "auth-form-e68a8",
  storageBucket: "auth-form-e68a8.appspot.com",
  messagingSenderId: "84759919894",
  appId: "1:84759919894:web:544699830ec474062fa437"


});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//    sign up function 

const signUp=()=>{
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	console.log(email,password)
	//firebase code
	firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You are Signed Up")
    
	console.log(result)
    // ...
  })
  .catch((error) => {
   console.log(error.code);
   console.log(error.message)
    // ..
	//firebase code end
  });
}

// Sign In function
const signIn = ()=>{
// firebase already login code start 

//making the variables 
const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    document.write("You are Signed In")
    window.location.href ='http://127.0.0.1:5500/index.html';
	console.log(result)
  })
  .catch((error) => {
    console.log(error.code);
   console.log(error.message)
  });
} 