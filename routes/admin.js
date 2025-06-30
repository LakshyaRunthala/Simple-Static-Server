const express = require('express');
const router = express.Router(); // or const app = express()

const basic = require("../controllers/basicController.js");

router.get("/", basic.Admin);

//Create 
router.post('/',(req,res) =>{
    res.send({Data:'Admin Created'});
});

//update
router.put('/',(req,res) =>{
    res.send({Data:'Admin Updated'});
});

//delete
router.delete('/',(req,res) =>{
    res.send({Data:'Admin Deleted'});
});

module.exports  = router