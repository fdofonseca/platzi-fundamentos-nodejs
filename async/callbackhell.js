function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola! ' + nombre);
        miCallback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios! ' + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}



// ----
hola('Juan', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado...');
    });
});


// hola('Carlos', function () {
//     hablar(function () {
//         hablar(function () {
//             adios('Fernando', function () {
//                 console.log('Terminando Proceso');
//             });
//         });
//     });
// });

