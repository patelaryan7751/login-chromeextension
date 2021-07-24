document.querySelector('#register').onclick = function(){
    var password = document.querySelector('#password').value;
    var email = document.querySelector("#email").value;
  
    email=email.trim();
    name=name.trim();
     if(password!=null && email!=null  && password!="" && email!="" && password!=" " && email!=" "){
         var pq=document.getElementById("loadar");
    pq.style.display="block";
         
         firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
                   var pq=document.getElementById("loadar");
    pq.style.display="none";        
            alert(errorMessage);

});
     }
    
}

firebase.auth().onAuthStateChanged(function(user) {
     if(user){
          var pq=document.getElementById("loadar");
    pq.style.display="none";
         window.open("loggedin.html",'_self')
     }

});