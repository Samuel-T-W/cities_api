const express = require('express');
const app = express();

require('dotenv/config')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("DB connected!")
  client.close();
});

const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes); 

app.get('/', (req, res) => {
    res.send('we are on home');
})

app.listen(3000);