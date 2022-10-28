
const {MongoClient} =require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// async function getdata(){
//     let result = await client.connect();
//     let db = result.db('e-comm');
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray()
//     console.log(response);
// }
// getdata();

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('products');
}

module.exports=dbConnect;