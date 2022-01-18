const express = require('express');
const db = require('./connectDB');
const router = express.Router();

const getAccount = async (req, res, next) => {
    let account = await db.getOneAccount(req.body);
    if(account){
        res.status(200).json(account);
    } else {
        res.status(400).send();
    }
}

router.post('/', getAccount);

module.exports = router;