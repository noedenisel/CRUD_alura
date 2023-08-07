console.log("client service conectado");

const http = new XMLHttpRequest()

//?Abrir http(metodo, url)
http.open("GET", "http://localhost:3000/perfil")

http.send()

http.onload = () => {
    const data = http.response
    console.log(data);
}


console.log(http);