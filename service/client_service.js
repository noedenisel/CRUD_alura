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


const listaClientes = () =>
    fetch("http://localhost:3000/perfil")
        .then (respuesta =>
            respuesta.json()
        )

    // const promise = new Promise((resolve, reject) => {
   
    //     const http = new XMLHttpRequest()
    //     http.open("GET", "http://localhost:3000/perfil") //? Abrir http(metodo, url)

    //     http.send()

    //     http.onload = () => {
    //         const response = JSON.parse(http.response)
    //         if(http.status >=400){
    //             reject(response)
    //         } else {
    //             resolve(response)
    //         }
    //     }
    // })
    // return promise


listaClientes().then((data)=>{
    console.log(data);
    data.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
    table.appendChild(nuevaLinea)
})
}).catch((error) => alert(error))

