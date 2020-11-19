module.exports = {
    multipleMongoToObject: function (mongoArray) {
        return mongoArray.map((mongo) => mongo.mongoToObject());
    },
    mongoseToObject: function (mongose) {
        return mongose ? mongose.mongoseToObject() : mongose;
    },
};
