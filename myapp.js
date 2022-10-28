// const http = require('http');
// const data = require('./apidata');
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000);

// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname, 'files'); //by this we will get current diractory path, files given to go inside files
// console.log(dirpath)

// for(i=0; i<5; i++){
//     fs.writeFileSync(dirpath+`/hello${i}.txt`, "Multiple file created by for loop")
// }

// fs.readdir(dirpath,(err,files)=>{
//     // console.log(files);
//     files.forEach((item)=>{
// console.log(item);
//     })
// })
// const filepath = `${dirpath}/apple.txt`; //to create a file inside files folder
// fs.writeFileSync(filepath, 'this is file inside files folder'); 

// fs.readFile(filepath, 'utf8', (err, item)=>{ //read file
//     console.log(item);
// })

// fs.appendFile(filepath, ' update again', (err)=>{ //update file
//     if(!err){
//         console.log('file updated');
//     }
// })

// fs.rename(filepath, `${dirpath}/fruit.txt`, (err)=>{//to rename the file
//     console.log('file renamed');
// }) 

// fs.unlinkSync(`${dirpath}/fruit.txt`);

//Asynchronous
// let a = 20;
// let b = 0;

// setTimeout(()=>{ //before promise
//     b=30;
// },2000);

// let waitingvariable = new Promise((resolve, reject)=>{ //promise
//     setTimeout(()=>{
//         b=30
//         resolve(b)
//     },2000);
// })

// waitingvariable.then((data)=>{
//     console.log(a+data);
// })


//MONGO_DB

// const {MongoClient} =require('mongodb');
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// // async function getdata(){
// //     let result = await client.connect();
// //     let db = result.db('e-comm');
// //     let collection = db.collection('products');
// //     let response = await collection.find({}).toArray()
// //     console.log(response);
// // }
// // getdata();

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db('e-comm');
//     return db.collection('products');
// }

const dbConnect = require('./mongodb');

//1st way
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{ //toArray always return promise to resove need to use then.
//         console.log(data);
//     })
// })



//second way
let main =async ()=>{
    let data =await dbConnect();
    data =await data.find().toArray();
    console.log(data);
}
main()


