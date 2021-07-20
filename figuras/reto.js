function calcularAlturaTriangulo() {
	const input1 = document.getElementById("inputTriangulo1");
	const input2 = document.getElementById("inputTriangulo2");
	const inputB = document.getElementById("inputBase");

	const lado1 = parseFloat(input1.value);
	const lado2 = parseFloat(input2.value);
	const ladoB = parseFloat(inputB.value);

	if (lado1 == lado2 && lado1 != ladoB) {
		const altura = Math.sqrt((lado1**2)-((ladoB**2)/4));
		alert("La altura de tu triangulo es " + altura);
	} else {
		alert("Este triangulo no es isoceles :(");
	}
}