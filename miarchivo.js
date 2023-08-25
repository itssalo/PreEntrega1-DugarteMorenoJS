// Solicitar al usuario que seleccione un producto y especifique la cantidad
let producto = prompt("Seleccione un producto:\n1. Producto A - $1.000\n2. Producto B - $5.000\n3. Producto C - $2.500");
let cantidad = prompt("Ingrese la cantidad deseada:");

// Convertir la entrada del usuario a números
producto = parseInt(producto);
cantidad = parseInt(cantidad);

// Definir los precios de los productos
let precioProductoA = 1000;
let precioProductoB = 5000;
let precioProductoC = 2500;

// Calcular el costo total según la selección del usuario
let costoTotal = 0;

if (producto === 1) {
    costoTotal = precioProductoA * cantidad;
} else if (producto === 2) {
    costoTotal = precioProductoB * cantidad;
} else if (producto === 3) {
    costoTotal = precioProductoC * cantidad;
} else {
    alert("Usted esta seleccionando una opcion no valida");
}

// Mostrar el resultado al usuario
if (costoTotal > 0) {
    alert("El total de su pedido es: $" + costoTotal);
}
