// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyCCYXDKz7XFWN0t6SvemNWk2aJjIMKfO_w",
 authDomain: "health-scooter-4f860.firebaseapp.com",
 projectId: "health-scooter-4f860",
 storageBucket: "health-scooter-4f860.appspot.com",
 messagingSenderId: "988109390176",
 appId: "1:988109390176:web:6ce9ca8ea70a5252555e05",
measurementId: "G-GVHXLPRDZG"
};
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()
  
  function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    username = document.getElementById('username').value
    fullname = document.getElementById('fullname').value
  }

  if (validate_email(email) == false || validate_password(password) == false){
    alert("Email or password is not filled")
    return 
  }

  if(validate_field(fullname) == false || validate_field(username) == false){
    alert("One or more extra field is not filled")
    return 
 }

  auth.createUserWithEmailAndPassword(email,password)
  .then(function(){
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      email : email,
      password : password,
      username : username,
      fullname : fullname,
      last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)




    alert("User Created!")
     
  })
  .catch(function(error){
    var error_code = error.error_code
    var error_message = error.message

    alert(error_message)
  })


  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true){
      return true
    }else{
      return false
    }
  }

  function validate_password(password){
    if (password < 6){
      return false
    }else{
      return false
    }
  }

  function validate_field(field) {
    if(field == null){
      return false
    }
    if (field.length <=0){
      return false
    }else{
      return true
    }
  }
   




  