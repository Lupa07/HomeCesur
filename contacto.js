//Javascript formulario contacto

var valor=document.getElementById("correo").value;

function pruebaemail(valor){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!re.exec(valor)){
        alert('email no valido');
    }
}