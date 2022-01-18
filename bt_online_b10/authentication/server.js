const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRouter = require('./register');
const loginRouter = require('./login');

const app = express();
const PORT = process.env.PORT || 3000;


const checkBodyReq = async (req, res, next) => {
    if (req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')) {
        next();
    } else {
        res.status(400).send();
    }
}

app.use(cors());
app.use(bodyParser.json());
app.use(checkBodyReq);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log('server readdy');
})