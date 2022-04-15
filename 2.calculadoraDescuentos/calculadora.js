
function calcularDescuento (precioOriginal, descuento) {

    let porcentajeAPagar = 100 - descuento;
    let precioConDescuento = (precioOriginal * porcentajeAPagar) / 100;

    return precioConDescuento;

}

function calcularCuantoPagar () {

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = parseFloat(inputPrice.value);

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = parseFloat(inputDiscount.value);

    const precioAPagar = calcularDescuento(priceValue,discountValue);

    const priceToPay = document.getElementById("priceToPay");
    priceToPay.innerText = `El precio a pagar con descuento es: $ ${precioAPagar}`;

}