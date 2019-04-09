let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create

const itemSchema = new Schema({
    nama:{
        type:String,
        required: true
    },
    harga:{
        type: Number,
        required: true
    },
    jumlah:{
        type: Number,
        required: true
    }

});

const barang = mongoose.model('barang', itemSchema);

module.exports = barang;