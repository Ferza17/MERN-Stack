let express = require('express');
let cors = require('cors');
let router = express.Router();


// Barang Model
const Barang = require('../../Models/Barang');



// @route   GET /v1/api/barang
// @desc    Get All Item
// @access  Public



router.get('/',(req,res,next) =>{
    Barang.collection.find({})
        .toArray()
        .then(items => res.json(items) , res.status(200))
        .catch(error => console.log(res));
}); 


//@route POST v1/api/barang
//@access Public
router.post('/',(req,res) => {
    const newBarang = new Barang({
        nama: req.body.nama,
        harga: req.body.harga,
        jumlah: req.body.jumlah
    });
    newBarang
        .save()
        .then(items => res.json(items),res.status(201))
        .catch(error => res.send(error));
});

module.exports = router;