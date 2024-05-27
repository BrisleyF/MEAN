const mongoose = require('mongoose');

const entrySchema = mongoose.Schema ({
  titular:String,
  numeroTarjeta:Number,
  fechaCaducidad:String,
  cvv:Number,
  fechaCreacion:{
    type:Date,
    default: Date.now()
  }
})
module.exports = mongoose.model('account', entrySchema);

