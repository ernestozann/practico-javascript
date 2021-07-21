// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioFinal(precio, descuento) {
	const precioFinal = precio * ((100 - descuento)/100);
	return precioFinal;
}

// console.log(
// 	`Checkout:
// 	Precio original:    ${precioOriginal}
// 	Descuento aplicado: ${descuento}%
// 	Precio final:       ${precioFinal}`);