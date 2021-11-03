var usuario = document.getElementById("usernamesignup").value;
function validaNombre(usuario){
   
        if(usuario ==null) {
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



