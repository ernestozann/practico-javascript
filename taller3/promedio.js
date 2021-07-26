// const lista1 = [
// 	100,
// 	200,
// 	300,
// 	400,
// 	500,
// ];

// console.log("el promedio es: " + promedioLista1);

function calcularMediaAritmetica(lista) {
	//Con ciclo for
	// let sumaLista = 0;

	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista = sumaLista + lista[i];
	// }

	//con reduce
	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);

	const promedioLista = sumaLista / lista.length;
	console.log("La media de tu lista es: " + promedioLista);
}