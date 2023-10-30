function asincronia(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asincronia((error, data) => {
    if (error) {
        console.error('Tenemos un error');
        console.error(error);
        return false;
        // throw error;
    }

    console.log('Todo ha ido bien, la data es: ' + data);
});
