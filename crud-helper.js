// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// eslint-disable-next-line no-unused-vars
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
