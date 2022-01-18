const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data-server');

const schema = mongoose.Schema;

const accountSchema = new schema({
    username: String,
    password: String
}, {
    collection: 'account',
})

const accountModel = mongoose.model('account', accountSchema);

const createAccount = async data => {
    let result = await accountModel.create(data);
    return result;
}

const getOneAccount = async key => {
    let result = await accountModel.findOne(key);
    return result;
}

module.exports = {
    createAccount,
    getOneAccount,
}