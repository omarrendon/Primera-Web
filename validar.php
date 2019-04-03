<?php
include 'cn.php';

$usuario = $_POST['loginUsuario'];
$clave = $_POST['loginPassword'];

$consulta="SELECT * FROM usuarios WHERE Correo = '$usuario' and Password = '$clave'";
$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);
if($filas > 0) {
	header("location:Inicio.html");
}else {
	echo '<script>
		alert("USUARIO INCORRECTO");
		window.history.go(-1);
	</script>';
}
mysqli_free_result($resultado);
mysqli_close($conexion);