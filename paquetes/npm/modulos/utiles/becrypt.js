const beCrypt = require('bcrypt');

const password = '1234Segura!';

beCrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    beCrypt.compare(password, hash, function(err, result) {
        // console.log(err);
        console.log(result);
    });
});