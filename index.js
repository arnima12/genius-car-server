const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//middle wars
app.use(cors());
app.use(express.json());
require('dotenv').config();
//  geniusCar
// 9i7bXJ68F1ygeEyH
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mwroqof.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/',(req,res) =>{
    res.send('genius car server is running')
})
app.listen(port, () =>{
    console.log(`Genius Car server running on ${port}`);
})