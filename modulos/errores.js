function otraFunction() {
    return seRompe();
}

function seRompe() {
    return 3 + Z;
}

function seRompeAsync() {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (error) {
            console.error(error);
        }
    })
}

try {
    seRompeAsync();
} catch (err) {
    console.error("Algo se ha roto...");
    console.error(err);
    console.error(err.message);
}