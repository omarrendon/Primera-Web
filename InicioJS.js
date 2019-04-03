function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    //document.getElementById("pie").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    //RECORRE A LA DERECHA EL CAMPO PRINCIPAL, Y CUANDO CIERRA EL MENU LOS REGRESA A SU POSICION
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "100px";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
	//document.getElementById("pie").style.marginLeft = "100px";
}