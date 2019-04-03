function validar() {
	var nombre, apellido, correo, password;
	nombre = document.getElementById("loginNombre").value;
	apellido = document.getElementById("loginApellidos").value;
	correo = document.getElementById("loginCorreo").value;
	password = document.getElementById("loginPasswordRegistro").value;

	if(nombre === "" ) {
		alert("El campo nombre se encuentra vacio");
		return false;
	}
	if(apellido === "" ) {
		alert("El campo apellido se encuentra vacio");
		return false;
	}
	if(correo === "" ) {
		alert("El campo correo se encuentra vacio");
		return false;
	}
	if(password === "" ) {
		alert("El campo password se encuentra vacio");
		return false;
	}
}