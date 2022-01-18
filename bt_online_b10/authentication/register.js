const express = require('express');
const db = require('./connectDB');
const router = express.Router();


const checkAccountExist = async (req, res, next) => {
    let result = await db.getOneAccount({username: req.body.username});
    if (result) {
        res.status(400).send();
    }else {
        next();
    }
}

const createAccount = async (req, res, next) => {
    let newAccount = await db.createAccount(req.body);
    if(newAccount._doc.hasOwnProperty('_id')){
        res.status(201).json(newAccount._doc);
    } else {
        res.status(501).send();
    }
}

router.post('/', checkAccountExist, createAccount);

module.exports = router