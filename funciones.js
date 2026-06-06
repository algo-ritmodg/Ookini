function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad

    return total
}

console.log(calcularPrecio(5, 2));
console.log(calcularPrecio(7, 2));
console.log(calcularPrecio(4, 3));


//puede ser asi
function puedeReservar (cantidad) {
    if (cantidad <= 2) {
        return true;
    } else {
        return false;
    }
}
//o asi

function puedeReservar (cantidad){
    return cantidad <=2 ;
}

//hacen lo mismo solo que bueno uno es mas corto que el otro

