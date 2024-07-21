fetch("/plantel.json")
.then(Response => Response.json())
.then(data => mostrarData(data))

const mostrarData = (data) => {
    let body = ""
    for (let i = 0; i <data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].posicion}</td><td>${data[i].edad}</td></tr>`
    }

    document.getElementById("data").innerHTML = body
}
