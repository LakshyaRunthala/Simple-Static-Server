const express = require('express');
const router = express.Router(); // or const app = express()

const basic  = require('../controllers/basicController.js');


router.get("/", basic.User);

//Create 
router.post('/',(req,res) =>{
    res.send({Data:'User Created'});
});

//update
router.put('/',(req,res) =>{
    res.send({Data:'User Updated'});
});

//delete
router.delete('/',(req,res) =>{
    res.send({Data:'User Deleted'});
});

module.exports  = router;