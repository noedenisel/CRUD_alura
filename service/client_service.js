console.log("client service conectado");

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

    export const clienteServices = {
        listaClientes
    }