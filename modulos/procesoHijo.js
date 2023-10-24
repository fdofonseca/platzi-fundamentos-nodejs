const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stout);
// });

let proceso = spawn('dir');
console.log(proceso);

proceso.stdout.on('data', function(dato) {
    console.log(dato);
});