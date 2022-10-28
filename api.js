const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json()); //this one used to get data from postman

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    console.log(data);
    // res.send({name:'dev'})
    res.send(data);
})

app.post('/', async (req, res) => {
    // console.log(req.body); //post doing app.use this statement need to use to see the requested data.
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    // res.send({name:'dev'})
})

// app.put('/', async (req, res) => { //without url parameter
    app.put('/:name', async (req, res) => { //with url parameter
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        // { name: "nokia" },
        // { name: req.body.name }, //without url dynamic name also check
        {name:req.params.name}, //url parameter
        // { $set: { price: 2 }  //static data
        { $set: req.body  //same as above but dynamic from postman
    }
    )
    console.log(result)
    res.send({ result: 'update' });
})

app.delete("/:id", async (req, res)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    // res.send('done')
    res.send(result);
})

app.listen(3000)

