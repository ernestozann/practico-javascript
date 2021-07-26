// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
	{
		name:"Yo_soy_Batman",
		discount: 15,
	},
	{
		name:"Joker_es_culpa_de_Batman",
		discount: 30,
	},
	{
		name:"Jason_Todd_sigue_vivo",
		discount: 25,
	},
];

function calcularPrecioFinal(precio, descuento) {
	const precioFinal = precio * ((100 - descuento)/100);
	return precioFinal;
}

function onClickPriceDiscount() {
	const precio = parseInt(document.getElementById("inputPrice").value);
	const couponValue = document.getElementById("inputDiscount").value;

	const isCouponValid = function (coupon) {
		return coupon.name === couponValue;
	};

	const userCoupon = coupons.find(isCouponValid);

	if (!userCoupon) {
		alert("El cupón: " + couponValue + ", no es válido");
	} else {
		const descuento = userCoupon.discount;
		const precioConDescuento = calcularPrecioFinal(precio, descuento);
		const resultP = document.getElementById("result");
		resultP.innerText = "El precio con descuento es $" + precioConDescuento;
	}
	
}
// console.log(
// 	`Checkout:
// 	Precio original:    ${precioOriginal}
// 	Descuento aplicado: ${descuento}%
// 	Precio final:       ${precioFinal}`);