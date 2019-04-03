<?php
include 'cn.php';
$nombre = $_POST["loginNombre"];
$apellidos = $_POST["loginApellidos"];
$correo = $_POST["loginCorreo"];
$password = $_POST["loginPasswordRegistro"];
//CONSULTA PARA INSERTAR DATOS 
$insertar = "INSERT INTO usuarios(Nombres, Apellidos, Correo, Password) VALUES ('$nombre', '$apellidos', '$correo', '$password')";

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Correo = '$correo'");
if (mysqli_num_rows($verificar_usuario) > 0){
	echo '<script>
		alert("EL USUARIO YA ESTA REGISTRADO");
		window.history.go(-1);
	</script>';
	exit;
}


//EJECUTAR CONSULTA
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
	# code...
	echo 'ERROR AL REGISTRARSE';
}else {
	echo '<script>
		alert("USTED HA SIDO REGISTRADO");
		window.history.go(-1);
	</script>';
}
//cerrar conexion
mysqli_close($conexion);