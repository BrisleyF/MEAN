const mongodbUtil = require("../util/mongodbUtil");
const crearError = require("../util/errorUtil").crearError;

exports.buscarPorLogin = function (login) {
  return new Promise(function (resolve, reject) {
    mongodbUtil.esquema
      .collection("usuarios")
      .findOne({ login: login })
      //.then( usuario => {
      //    resolve(usuario)
      //})
      .then(resolve)
      .catch((error) => {
        console.log(error);
        reject(crearError(500, "Error con la base de datos"));
      });
  });
};

/* exports.buscarPorLogin = async function(login){
	try {
		return await mongodbUtil.esquema.collection("usuarios").findOne({ login: login });
	} catch (error) {
		console.log(error)
        throw crearError(500, "Error con la base de datos")
	}
} */

exports.insertarUsuario = function (usuario) {
  return new Promise(function (resolve, reject) {
    //Validar los datos
    //Comprobar que el login no está repetido
    //insertar el usuario

    if (
      !usuario.login || usuario.login.trim() == "" ||
      !usuario.correoE || usuario.correoE.trim() == "" ||
      !usuario.nombre || usuario.nombre.trim() == "" )
	  {
      	reject(crearError(400, "Datos inválidos"));
      	return; //pa no seguir
      }

    exports
      .buscarPorLogin(usuario.login)
      .then((usuarioEncontrado) => {
        //Si se ha encontrado significa que NO DEBEMOS insertar
        if (usuarioEncontrado) {
          reject(crearError(400, "Ya existe el login"));
          return;
        }

        //QUITAR EL _ID
        delete usuario._id;
        //calcular el hash del password y guardar el hash
        return mongodbUtil.esquema.collection("usuarios").insertOne(usuario);
      })
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        console.log(error);
        reject(crearError(500, "Fallo en la bb.dd. al insertar el usuario"));
      });
  });
};

//Autenticación: si
//Autorización :
//-empleados: pueden modificar cualquier usuario
//-clientes : solo pueden modificarse a si mismos
exports.modificarUsuario = function (usuario) {
  return new Promise(function (resolve, reject) {
    //Validación
    if (
      !usuario.login || usuario.login.trim() == "" ||
      !usuario.correoE || usuario.correoE.trim() == "" ||
      !usuario.nombre || usuario.nombre.trim() == "" ||
      !usuario.direccion || usuario.direccion.trim() == "" ||
      !usuario.telefono || usuario.telefono.trim() == "") 
	  {
      	reject(crearError(400, "Datos inválidos"));
      	return; //pa no seguir
      }

    //Autorización
    /*
        if(autoridad.rol=="CLIENTE" && autoridad._id!=usuario._id){                        
            reject( { codigo:403, 
                        mensaje:'Los clientes solo pueden modificarse a si mismos' } ) //Mal
            return
        }
        */

    //Modificar
    mongodbUtil.esquema
      .collection("usuarios")
      .findOneAndUpdate(
        { _id: new ObjectId(usuario._id) },
        {
          $set: {
            //Aqui no podemos colocar el _id (es inmutable)
            nombre: usuario.nombre,
            correoE: usuario.correoE,
            telefono: usuario.telefono,
            direccion: usuario.direccion,
          },
        }
      )
      .then((resultado) => {
        if (!resultado.value) {
          reject(crearError(404, "El usuario no existe"));
          return;
        }
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject(crearError(500, "Error con la base de datos"));
      });
  });
};
