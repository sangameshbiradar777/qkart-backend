const nedb = require('nedb');
const users = new nedb({ filename: 'db/users.db', autoload: true, corruptAlertThreshold: 1 })
const products = new nedb({ filename: 'db/products.db', autoload: true });

module.exports.users = users
module.exports.products = products
