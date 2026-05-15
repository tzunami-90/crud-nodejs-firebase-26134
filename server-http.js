/*Modulo HTTP de NODE */
const http = require('http');

const server = http.createServer((request, reponse) => {
    console.log(request.url, request.method);
    reponse.end('Hola mundo');
});

//server.listen(3000); //escucha en un puerto particular, en este caso en localhost:3000
server.listen(3000, () => console.log('http://localhost:3000')); //Puedo poner una accion cuando el servidor se levanta