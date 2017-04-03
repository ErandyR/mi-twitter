var botonEnviar = document.getElementById("enviarTwitter");
botonEnviar.addEventListener("click", escribirComentario);



function escribirComentario(){
  var miTwiter = document.getElementById("miTwitter");
  var autor = document.getElementById("autor");

  var seccion = document.getElementById("seccionComentarios");
  var articulo = document.createElement("article");
  var parrafo = document.createElement("p");

  var textoTwitter = document.createTextNode(miTwiter.value);
  var textoAutor = document.createTextNode(autor.value);
  var saltoDeLinea = document.createElement("br");

  parrafo.appendChild(textoTwitter);
  parrafo.appendChild(saltoDeLinea);
  parrafo.appendChild(textoAutor);
  articulo.appendChild(parrafo);
  seccion.appendChild(articulo);
  document.getElementById("miFormulario").appendChild(seccion);

}
