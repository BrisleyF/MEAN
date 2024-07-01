const mongodb = require("mongodb");

exports.esquema = null;


exports.conectar = async function () {
	try {
		console.log("Conectando con mongoDB...");
		const url = process.env["mongodb.url"];
		const client = new mongodb.MongoClient(url);
		let dbs = await client.connect();
		console.log("Conexión establecida");
		exports.esquema = dbs.db(process.env["mongodb.esquema"]);
	} catch (error) {
		console.log(error);
		throw { codigo: 500, mensaje: "no se pudo onectar con la bb.dd" };
	}
};
