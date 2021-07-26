function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

const lista1 = [
	100,
	200,
	500,
	400000000,
];

//reto
const numeros = [
	3,
	23,
	12,
	42,
	100,
	1000,
];

numeros.sort(function(a, b) {
	//para odenar de menoa a mayor
	return a - b;
	//para odenar de mayor a menor
	//return b - a;
});
//reto completado

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

let mediana;

if (esPar(lista1.length)) {
	const elemento1 = lista1[mitadLista1 - 1];
	const elemento2 = lista1[mitadLista1];

	const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
	mediana = promedioElemento1y2;
	console.log(`La mediana de tu lista es: ${mediana}`);
} else {
	mediana = mitadLista1;
	console.log("La mediana de tu lista es: " + lista1[mediana]);
}