var contenedor = document.getElementById("body-content");
	contenedor.appendChild(createElement("div","div-content"));
	contenedor.appendChild(createElement("div","div-content2"));

var contentRed = document.getElementsByClassName("div-content1")[0];
var contentBlue = document.getElementsByClassName("div-content2")[0];
	contentBlue.appendChild(createElement("div","verde"));
	contentBlue.appendChild(createElement("div","black"));



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




