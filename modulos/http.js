const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
    console.log('Nueva petición');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.write('Hola que tal');
            response.end();
            break;
        default:
            response.write('Error 404: No se lo que quieres');
            response.end();
            break;
    }

    // response.writeHead(201, { 'Content-Type': 'text/plain' });
    // response.write('Hola, ya se usar HTTP en node');

    // response.end();
}

console.log('Escuchando puerto 3000');


//Iniciar servidor con "nodemon http.js"