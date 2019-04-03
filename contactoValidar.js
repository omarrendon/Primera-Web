function validarForm() {
	// body...
	var nombreContacto, apellidoContacto, correoContacto;
	nombreContacto = document.getElementById("nombreContacto").value;
	apellidoContacto = document.getElementById("apellidoContacto").value;
	correoContacto = document.getElementById("correoContacto").value;

	if (nombreContacto === "") {
		alert("El campo nombre se encuentra vacio");
		return false;
	}
	if(apellidoContacto === "" ) {
		alert("El campo apellido se encuentra vacio");
		return false;
	}
	if(correoContacto === "" ) {
		alert("El campo correo se encuentra vacio");
		return false;
	}

}