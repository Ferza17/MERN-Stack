let express = require('express');
let router = express.Router();
const middleware = require('../../middleware/check-auth');

// Barang Model
const Barang = require('../../Models/Barang');

// @route   GET /v1/api/barang
// @desc    Get All Item
// @access  Public

router.get('/',middleware,(req,res,next) =>{

    Barang.collection.find({})
        .toArray()
        .then((items) => {
            res.status(200).json(items);
        }).catch((err) => {
            res.status(404).json({
                messege: err
            });
        });
}); 


//get Barang with id
router.get('/:id',middleware,(req,res,next)=>{
    Barang.findById(req.params.id)
        .then(items => {
            if(!items){
                res.status(200).json({
                    messege : 'Items Not Found'
                });
                next();
            }else{
                res.status(200).json(items)
            }
        })
        .catch(err => res.status(404).json(err));
});

//@route POST v1/api/barang
//@access Public
router.post('/', middleware ,(req,res) => {
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


router.delete('/:id',middleware,(req,res)=>{
    Barang.findOneAndDelete({_id:req.params.id})
        .then(Barang => {
            res.status(200).json({messege:'Succes'})
        });
});


router.put('/:id',middleware,(req,res)=>{
    Barang.updateOne({_id:req.params.id},req.body)
        .then(Barang => {
            res.status(200).json({
                messege : 'update'
            });
        })
});

module.exports = router;