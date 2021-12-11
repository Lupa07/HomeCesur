# tienda_cesur
#Tienda de Cursos de Cesur.

*Nuestro cliente contratará el servicio de un servidor apache en el cual volcaremos los ficheros de nuestra pagina.*

*Estilo*
#Todas las paginas del sitio web contaran con el fondo de imagen "fondo-contacto.jpg", con una pantalla opaca de color blanco sobre la que se compondrá el contenido de la web.
Los colores utilizados son los identificativos de la marca (Azul: rgb(34,96,178),Amarillo: rgb(245, 245, 5), Blanco: rgb(255, 255, 255)).
Todas las paginas contarán con un "footer".

  Actualizacion de estilo:
    La web en la pagina de HOME podrá presentar cualquier tipo de apariencia ya que el cliente no ha cumplido con las exigencias para trabajar con nosotros, por consiguiente, la guia de estilos queda anulada y cualquier modificacion de la misma podrá hacerse sin consulta alguna sobre los creadores.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*HOME*
#Realizamos una web para la contratacion de cursos de Cesur, en la cual se observa los enlaces a diferentes zonas de nuestro sitio web. En la primera fila podremos observar los cursos destacados del centro y desplazando el raton sobre ellos podremos ver su precio y solicitar mas información.
En la segunda linea encontramos las nuevas ofertas que nuestro cliente quiera indicar y de la misma manera que la linea anterior, pasando el ratón sobre la imagen aparecerá el precio y el boton de solicitud.

  Actualizacion:
  Se han implementado todas las pautas designadas en la practica, se ha creado un logo e introducido el cual incluye una animacion con transform .
  Se ha implementado un video corto y otro largo con el preload en el video largo con los controles personalizados, ademas de implementar un reproductor de audio.
  La imagen de fondo ha sido seleccionada de la herramienta de busqueda de Google Imagenes con la configuracion de imagenes "Licencia CC".
  Se ha reducido la imagen de "cocina" con la herramienta online compresor.io, el cual redujo la imagen de 14kb a 13 kb.
  En el apartado de nuevos cursos se ha aplicado un estilo a las imagenes modificando su "border-radius".
  Se ha implementado un "dialog" el cual cubre todo el contenido de la pagina al desplegarse.
  Se han implementado trnasiciones mediante steps().
  Se ha actualizado la guia de estilos.
  
  

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Login*
#En la ventana de Login, nos aparece un formulario que da acceso a la plataforma de alumno de cesur el cual nos solicita nuestro Email el cual tendra que tener una estructura (ejemplo@ejemplo.com), el cual realiza una validacion de dicho campo contenida en el fichero *login.html*. Cuenta además con el requerimiento de que el campo "Contraseña" tiene que estar relleno. Cuenta ademas con un enlace el cual nos regresa a la página principal

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Registro*
#En esta ventana encontraremos un formulario que permitirá hacer el registro de un nuevo usuario en nuestra base de datos. El formulario cuenta con una aparición con barrido realizada mediante CSS y realizará validaciones en html para requerir que todos los campos esten rellenos. Ademas realizará una validación para comprobar que el email introducido tenga la estructura correcta y para que las contraseñas introducidas ademas de ser iguales, sean de minimo 8 caracteres, incluyendo mayúsculas, minusculas y números, los cuales se pueden consultar en el archivo "registro.html", "cssregistro.css" y "registro.js". Contamos con un botón de registro que realizará dichas validaciones y enviará la informacion a la base de datos. Contamos con un enlace en la parte inferior por si el usuario se equivocase y ya estuviese registrado.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*Contacto*
#En la pagina de Contacto, encontraremos un formulario que tambien aparecera con un barrido mediante CSS y el cual solicitará informacion al usuario, además de tener que indicar mediante un desplegable el motivo del contacto. Se han de aceptar las condiciones y rellenar todos los campos para que el boton "Submit" sea desbloqueado y accesible por el usuario. Tambien contamos con un boton que nos permitirá resetear el formulario si se han introducido datos erroneos. En este formulario las validaciones se realizaran sobre la estructura del correo electronico, aceptar las politicas del Sitio Web, la longitud del telefono introducido, seleccionar un motivo de contacto y longitud del nombre de usuario, las cuales se pueden consultar en el archivo "contacto.js".
