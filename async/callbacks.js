function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola! ' + nombre);
        miCallback();
    }, 1000);
}

function adios(nomre, otroCallback){
    setTimeout(function(){
        console.log('Adios! ' + nomre);
        otroCallback();
    }, 1000);
}

hola('Carlos', function () {
    adios('Fernando', function(){
        console.log('Terminando Proceso');
    });
});

