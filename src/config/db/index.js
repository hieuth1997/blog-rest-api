const mongoose = require('mongoose');
var env = require('dotenv').config();
async function connect() {
    try {
        mongoose.connect(
            'mongodb://' +
                process.env.COSMOSDB_HOST +
                ':' +
                process.env.COSMOSDB_PORT +
                '/' +
                process.env.COSMOSDB_DBNAME +
                '?ssl=true&replicaSet=globaldb',
            {
                auth: {
                    user: process.env.COSMOSDB_USER,
                    password: process.env.COSMOSDB_PASSWORD,
                },
                useNewUrlParser: true,
                useUnifiedTopology: true,
                retryWrites: false,
            },
        );
        console.log('connect successfully');
    } catch (err) {
        console.log('connect failed');
    }
}

module.exports = { connect };
