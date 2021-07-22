// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioFinal(precio, descuento) {
	const precioFinal = precio * ((100 - descuento)/100);
	return precioFinal;
}

function onClickPriceDiscount() {
	const precio = parseInt(document.getElementById("inputPrice").value);
	const descuento = parseInt(document.getElementById("inputDiscount").value);

	const precioConDescuento = calcularPrecioFinal(precio, descuento);
	
	const resultP = document.getElementById("result");
	resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}
// console.log(
// 	`Checkout:
// 	Precio original:    ${precioOriginal}
// 	Descuento aplicado: ${descuento}%
// 	Precio final:       ${precioFinal}`);