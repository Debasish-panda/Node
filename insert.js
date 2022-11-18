const dbConnect = require('./mongodb');
const insert = async () => {
    const db = await dbConnect();
    // console.log(db);
    const result = await db.insert(
        {name:'note5', brand:'vivo',price:2344, catagory:'mobile'}
    );
    // console.log(result);

    if(result.acknowledged){
        console.log('data saved successfully');
    }
}
insert();