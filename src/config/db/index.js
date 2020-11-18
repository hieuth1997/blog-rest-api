const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(
            'mongodb://cokker1997:elXIStUNpJb3T2eJv3WtcwSQBU7qTG9AxKwxWFDetpOIqXOtwrb4NgddncBj6VaCaMu2wHxMXztm80Mz37pWXQ==@cokker1997.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cokker1997@/uit_blog_pd',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('connect successfully');
    } catch (err) {
        console.log('connect failed');
    }
}

module.exports = { connect };
