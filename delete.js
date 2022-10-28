const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne(
        { brand: 'poco' }
    )
    console.log(result)
    if(result.acknowledged){
        console.log('row deleted')
    }
    if(result.deletedCount == 0){
        console.log('no record found')
    }

}
deleteData();