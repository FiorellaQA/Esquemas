var contenedorPrincipal = createElement("div","contenedorPrincipal");

var contenedor1 = createElement("div","div-content");
var contentMorado = createElement("div","morado");
var contentAmarillo = createElement("div", "amarillo");

var contenedor2 = createElement("div","div-content2");
var contentVerde = createElement("div","verde");
var contentNegro = createElement("div","black");

	document.body.appendChild(contenedorPrincipal);

	contenedorPrincipal.appendChild(contenedor1);
	contenedorPrincipal.appendChild(contenedor2);
	contenedor2.appendChild(contentNegro);
	contenedor2.appendChild(contentVerde);

	contenedor1.appendChild(contentMorado);
	contentMorado.appendChild(contentAmarillo);
	contenedor1.appendChild(contentMorado);



// createElement("div","div-content");
// createElement("div","div-content2");
// var div1 = document.createElement("div");
// div1.classList.add("div-content");
// var div2 = document.createElement("div");
// div2.classList.add("div-content2");
// contenedor.appendChild(div1);
// contenedor.appendChild(div2);

function createElement(element, cls){
	var newElement = document.createElement(element);
		newElement.classList.add(cls);
		return newElement;
}

// var arrayClass = [];
// for( var i = 0 ; i < 6 ; i++){
// 	newDiv = document.createElement("div");
// 	document.body.appendChild(newDiv);
// }




