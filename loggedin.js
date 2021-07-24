document.querySelector('#logout').onclick = function(){
                firebase.auth().signOut();          
        
}


firebase.auth().onAuthStateChanged(function(user) {
     if(user){
         var pq=document.getElementById("loadar");
    pq.style.display="none";
         document.getElementById("uid").style.display="block"
           document.getElementById("email").style.display="block"
         document.getElementById("uid").textContent=`Uid: ${user.uid}`
          document.getElementById("email").textContent=`Email: ${user.email}`
         
     }
    else{
        window.open("popup.html",'_self')
        
    }

});