const dbConnect = require('./mongodb');

const updatedata = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: "c21" }, { $set: { name: 'c111' } }
    )

    if(result.acknowledged){
        console.log('row updated');
    }
}
updatedata();