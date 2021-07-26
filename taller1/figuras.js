//square code
console.group("Squares");
	// const ladoCuadrado = 5;
	// console.log("los lados del cuadrado miden " + ladoCuadrado + " cm");

	function perimetroCuadrado(lado) {
		return lado * 4;
	}
	// console.log("El perimetro del cuadrado mide " + perimetroCuadrado + " cm");

	function areaCuadrado(lado) {
		return lado * lado;
	};
	// console.log("El area del cuadrado mide " + areaCuadrado + " cm2");
console.groupEnd();

//triangle code
console.group("Triangles");
	// const ladoTriangulo1 = 6;
	// const ladoTriangulo2 = 6;
	// const baseTriangulo = 4;
	// const alturaTriangulo = 5.5;

	// console.log(
	// 	"los lados del triangulo miden: " 
	// 	+ ladoTriangulo1 
	// 	+ " cm, "
	// 	+ ladoTriangulo2
	// 	+ " cm, "
	// 	+ baseTriangulo
	// 	+ " cm"
	// );

	// console.log("La altura del triangulo mide " + alturaTriangulo + " cm");

	function perimetroTriangulo(lado1, lado2, base) {
		return lado1 + lado2 + base;
	}
	// console.log("El perimetro del triangulo mide " + perimetroTriangulo + " cm");

	function areaTriangulo(base, altura) {
		return (base*altura) / 2;
	}
	// console.log("El area del triangulo mide " + areaTriangulo + " cm2");
console.groupEnd();

//circles code
console.group("Circles");
	const pi = Math.PI;
	function diametroCirculo(radio) {
		return radio * 2;
	}
	function perimetroCirculo(radio) {
		const diametro = diametroCirculo(radio);
		return pi * diametro;
	}
	function areaCirculo(radio) {
		return pi * (radio ** 2);
	}

	// console.log("El radio del circulo mide: " + radioCirculo + " cm");
	// console.log("El diametro del circulo mide: " + diametroCirculo + " cm");
	// console.log("El perimetro del circulo mide: " + perimetroCirculo + " cm");
	// console.log("El area del circulo mide: " + areaCirculo + " cm2");

console.groupEnd();

//interaccion con html
//square
function calcularPerimetroCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;
	
	const perimetro = perimetroCuadrado(value);
	alert("El perimetro del cuadrado mide " + perimetro);
}
function calcularAreaCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;

	const area = areaCuadrado(value);
	alert("El area del cuadrado mide " + area);
}

//triangle
function calcularPerimetroTriangulo() {
	const input1 = document.getElementById("inputTriangulo1");
	const input2 = document.getElementById("inputTriangulo2");
	const inputBase = document.getElementById("inputBase");

	const lado1 = parseFloat(input1.value);
	const lado2 = parseFloat(input2.value);
	const base = parseFloat(inputBase.value);
	
	const perimetro = perimetroTriangulo(lado1, lado2, base);
	alert("El perimetro del triangulo mide " + perimetro);
}
function calcularAreaTriangulo() {
	const inputBase = document.getElementById("inputBase");
	const inputH = document.getElementById("inputAltura");

	const base = parseFloat(inputBase.value);
	const altura = parseFloat(inputH.value);


	const area = areaTriangulo(base, altura);
	alert("El area del triangulo mide " + area);
}

//circle
function calcularPerimetroCirculo() {
	const input = document.getElementById("inputRadio");

	const radio = parseFloat(input.value);

	const perimetro = perimetroCirculo(radio);
	alert("El perimetro del circulo mide " + perimetro);
}
function calcularAreaCirculo() {
	const input = document.getElementById("inputRadio");

	const radio = parseFloat(input.value);

	const area = areaCirculo(radio);
	alert("El area del circulo mide " + area);
}