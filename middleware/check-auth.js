const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undifined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;


        jwt.verify(req.token, 'privateKey', (err) => {
            if (err) {
                res.status(404).json({
                    messege: err
                });
            } else {
                res.status(200);
                next();
            }
        });

    }else{
        res.status(403).json({
            messege: err
        });
    }
};
