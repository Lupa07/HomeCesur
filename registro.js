//EMAIL :
var usuario = document.getElementById("usernamesignup").value;
function validaNombre(usuario){
   
        if(usuario =="") {
          alert('No has escrito nada en el usuario');
          
        }
}
var valor=document.getElementById("emailsignup").value;

function pruebaemail(valor){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!re.exec(valor)){
        alert('email no valido');
    }
}
 

//CONTRASEÑA :
function Fcontraseña(){
  var p1 = document.getElementById("contrasena1").value;
  var p2 = document.getElementById("contrasena2").value;
      
    //no campo vacio
    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la contraseña no pueden quedar vacios");
        return false;
      }

    //ambas contraseñas coinciden
    if (p1 != p2) {
        alert("Las contraseñas deben de coincidir");
        return false;
      } else {
        alert("Contraseñas correctas");
        return true; 
      }
      
 }