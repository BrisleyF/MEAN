const fs = require("fs");

const certifcado = {
    "cert" : fs.readFileSync("./autenticacion/server.cert"),
    "key"  : fs.readFileSync("./autenticacion/server.key")
}

exports.getCertificado = function(){
    return certifcado;
}