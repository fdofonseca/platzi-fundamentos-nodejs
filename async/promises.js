function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola! ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla...');
            resolve(nombre);
            // reject('Error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios! ' + nombre);
            resolve();
        }, 1000);
    });
}



// -------------

console.log('Iniciando proceso...');

hola('Miguel')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso terminado...');
    })
    .catch(error => {
        console.error('ha habido un error...');
        console.error(error);
    });