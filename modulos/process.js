// const process = require('process');

process.on('beforeExit', () => {
    console.log('Proceso va a terminar');
});
process.on('exit', () => {
    console.log('Proceso terminado');
    setTimeout(() => {
        console.log('Esto no se ejecutará nunca');
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos olvidó capturar el error');
    console.error(err);
});
// process.on('uncaughtRejection');



romper();