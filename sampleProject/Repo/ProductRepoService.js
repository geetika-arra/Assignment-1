const Mongoclient =require('mongodb').MongoClient;
const MongoDBURL ='mongodb://localhost:27017';
const db ='ibm';

const getProducts =(callback)=>{
    Mongoclient.connect(MongoDBURL,(res,conn)=>{
        conn.db(db).collection('products').find().toArray((err,result)=>{
            callback(err,result);
        })
        conn.close();
    })
}

module.exports ={getProducts};