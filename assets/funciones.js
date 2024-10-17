class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto, cantidad) {
    this.productos.push({
      producto: producto,
      cantidad: cantidad,
    });
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach(
      (item) => (total += item.producto.precio * item.cantidad)
    );
    return total;
  }

  mostrarDetalles() {
    let total = 0;
    let productosStr = "";
    this.productos.forEach((item) => {
      total += item.producto.precio * item.cantidad;
      productosStr += `${item.producto.nombre} x ${item.cantidad}: $${
        item.producto.precio * item.cantidad
      }\n`;
    });
    alert(
      `Detalles de su compra:\n${productosStr}Total hasta ahora: $${total}`
    );
  }
}

let carrito = new Carrito();
let productos = [
  new Producto("Leche", 1000),
  new Producto("Pan de Molde", 2000),
  new Producto("Queso", 1200),
  new Producto("Mermelada", 890),
  new Producto("Azucar", 1300),
  new Producto("Caja de 12 Huevos", 4000),
  new Producto("500gr Carne Molida", 5500),
  new Producto("Arroz", 1600),
];

let productosStr = "";
productos.forEach(
  (producto, index) =>
    (productosStr += `${index + 1}. ${producto.nombre}: $${producto.precio}\n`)
);

while (true) {
  let seleccion = prompt(
    `Seleccione los productos que desea comprar:\n${productosStr}`
  );
  if (!seleccion || seleccion.trim() === "") {
    alert("Debe seleccionar al menos un producto");
    continue;
  }

  let productosSeleccionados = seleccion
    .split(",")
    .map((item) => Number(item) - 1);
  let valido = true;
  productosSeleccionados.forEach((index) => {
      if (index < 0 || index >= productos.length) {
      valido = false;
    }
  });
     if (!valido) {
    alert("Seleccione solo los productos que se encuentran en la lista");
    continue;
  }
  

  productosSeleccionados.forEach((index) => {
    let cantidad = Number(
      prompt(
        `Ingrese la cantidad de ${productos[index].nombre} que desea comprar`
      )
    );
    carrito.agregarProducto(productos[index], cantidad);
  });

  let agregarMas = prompt("Desea agregar más productos? (s/n)");
  if (agregarMas.toLowerCase() === "n") {
    let total = carrito.calcularTotal();
    alert(`El total de los productos es de $${total}`);
    alert(`Gracias por su compra. ¡Vuelva pronto! 😊`);
    break;
  }

  carrito.mostrarDetalles();
}
