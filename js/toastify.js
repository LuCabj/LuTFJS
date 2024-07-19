const sweetAlert = document.getElementById("Borrar");

sweetAlert.addEventListener("click", () => {
    Swal.fire({
        title: 'Listo!',
        text: 'Has limpiado tu carrito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
        })
});

