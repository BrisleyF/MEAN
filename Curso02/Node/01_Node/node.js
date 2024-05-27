const http = require("http");

/* 
function procesarPeticion(request, response){
//...
};

let server = http.createServer(procesarPeticion);
server.listen(1000); */

/* 
let procesarPeticion = function(request, response){  //funcion anomima
    //..
}

let server = http.createServer(procesarPeticion);
server.listen(1000);  */

let server = http.createServer(function(request, response){
//funcion que procesa las peticiones

    console.log("============");
    let metodo = request.method;
    let url = request.url;
    console.log("Peticion recibida: "+metodo+" "+url);

    if (metodo == "GET" && url == "/coches") {
        let html = crearHTML();
        response.setHeader("Content-Type", "text/html");
        response.end(html);
        }
        else {
        response.statusCode = 404;
        response.end();
        }

}).listen(1000);

function crearHTML(){

    let html = `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Nuestra primera web chispas</title>
            </head>
            <script type="application/javascript">
                alert("Contenido estático generado dinámicamente")
            </script>
            <body>
                <h2 align="center">
                    <font color="lightGreen">
                        Contenido HTML generado dinámicamente
                    </font>
                </h2>
                <table align="center" border="1">
                    <tr>
                        <th>Titulo</th>
                        <th>Director</th>
                    </tr>
                    ${generarTablaPeliculas()}
                </table>
            </body>
        </html>`

    return html
}

function generarTablaPeliculas() {
    let tabla = ""
    let peliculas = listarPeliculas()
    for (let pelicula of peliculas) {
        tabla +=`
            <tr>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.director}</td>
            </tr>`
    }
    return tabla
}

function listarPeliculas() {
    //Simulamos una consulta a la bb.dd.
    return [
        {
            titulo: 'Indiana Jones',
            director: 'Steven Spielberg'
        },
        {
            titulo: 'Depredador',
            director: 'John McTiernan'
        },
        {
            titulo: 'Los Goonies',
            director: 'Richerd Donner'
        },
        {
            titulo: 'Tron',
            director: 'Steven Lisberger'
        },
        {
            titulo: 'Los violentos de Kelly',
            director: 'Brian G. Hutton'
        }
    ]
}