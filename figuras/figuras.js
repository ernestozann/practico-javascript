//square code
console.group("Squares");
	const ladoCuadrado = 5;
	console.log("los lados del cuadrado miden " + ladoCuadrado + " cm");

	const perimetroCuadrado = ladoCuadrado * 4;
	console.log("El perimetro del cuadrado mide " + perimetroCuadrado + " cm");

	const areaCuadrado = ladoCuadrado*ladoCuadrado;
	console.log("El area del cuadrado mide " + areaCuadrado + " cm2");
console.groupEnd();

//triangle code
console.group("Triangles");
	const ladoTriangulo1 = 6;
	const ladoTriangulo2 = 6;
	const baseTriangulo = 4;
	const alturaTriangulo = 5.5;

	console.log(
		"los lados del triangulo miden: " 
		+ ladoTriangulo1 
		+ " cm, "
		+ ladoTriangulo2
		+ " cm, "
		+ baseTriangulo
		+ " cm"
	);

	console.log("La altura del triangulo mide " + alturaTriangulo + " cm");

	const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
	console.log("El perimetro del triangulo mide " + perimetroTriangulo + " cm");

	const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
	console.log("El area del triangulo mide " + areaTriangulo + " cm2");
console.groupEnd();

//circles code
console.group("Circles");
	const radioCirculo = 4;
	const diametroCirculo = radioCirculo * 2;
	const pi = Math.PI;
	const perimetroCirculo = pi * diametroCirculo;
	const areaCirculo = pi * (radioCirculo * radioCirculo);

	console.log("El radio del circulo mide: " + radioCirculo + " cm");
	console.log("El diametro del circulo mide: " + diametroCirculo + " cm");
	console.log("El perimetro del circulo mide: " + perimetroCirculo + " cm");
	console.log("El area del circulo mide: " + areaCirculo + " cm2");

console.groupEnd();