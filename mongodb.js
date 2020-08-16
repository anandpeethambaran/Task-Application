const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



mongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log(`Some error occured while connecting to databse : ${error}`);
    }
    console.log(`Mongodb Connection success`);
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'Mark',
        age: 22
    }, (error, doc) => {
        if(error){
            return console.log(`Unable to insert user : ${error}`);
        }
        console.log(doc.ops);
    })
})