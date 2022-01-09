const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data-server');

const Schema = mongoose.Schema;

const account = new Schema({
    username: String,
    password: String
}, {
    collection: 'account',
});

const accountModel = mongoose.model('account', account);

accountModel.find({})
.then(data => console.log(data))
.catch(err => console.error(err))
