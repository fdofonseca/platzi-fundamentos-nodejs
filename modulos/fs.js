const fs = require('fs');

function leerArchivo(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        //Leido
        callback(data.toString());
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (error) {
        if (error) {
            console.log('No se pudo escribir: ' + error);
        } else {
            console.log('Se ha escrito correctamente...');
        }
    });
};

function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}

//leerArchivo(__dirname + '/nuevoArchivo.txt', console.log);
//escribir(__dirname + '/nuevoArchivo.txt', 'Soy un archivo muy nuevo jajaj', console.log);
borrar(__dirname + '/nuevoArchivo.txt', console.log);