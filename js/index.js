const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaCamiseta = document.createElement("div");
    nuevaCamiseta.classList = "tarjeta-producto"
    nuevaCamiseta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="camisetas 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button id="test">Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaCamiseta);
    nuevaCamiseta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(camisetas);


