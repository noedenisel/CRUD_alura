console.log("client service conectado");

const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr")
    const contenido = ` 
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `
  linea.innerHTML = contenido
  return linea
}

const table = document.querySelector("[data-table]")

const http = new XMLHttpRequest()

//? Abrir http(metodo, url)
http.open("GET", "http://localhost:3000/perfil")

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data);
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
        table.appendChild(nuevaLinea)
    });

    const http2 = new XMLHttpRequest()

    http2.open("GET", "http://localhost:3000/perfil/hoy")
    http.send()
    http2.onload = () => {
        const data2 = JSON.parse(http2.response)
        console.log(data2);
        data2.forEach((perfil) => {
            const nuevaLinea2 = crearNuevaLinea(perfil.nombre, perfil.email)
            table.appendChild(nuevaLinea2)
            });
    }
}