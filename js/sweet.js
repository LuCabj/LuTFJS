document.addEventListener("DOMContentLoaded", () => {
    const test2 = document.getElementById("test");

    test2.addEventListener("click", () => {
        Swal.fire({
            title: 'Listo!',
            text: 'Agregaste este producto a tu carrito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
            });
});
});