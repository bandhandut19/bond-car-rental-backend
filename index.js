const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
require('dotenv').config()
const axios = require('axios');



const app = express()

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log('server running')
})

app.get('/', (req, res) => {
    res.send("Bond Car Rental server")
})





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ttptxjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/carsinfo', (req, res) => {
    axios.get('https://exam-server-7c41747804bf.herokuapp.com/carsList')
        .then(response => res.send(response.data.data))
})
app.post('/carsinfo', (req, res) => {
  axios.post('https://exam-server-7c41747804bf.herokuapp.com/carsList')
      
})



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const bond_car_rental = client.db('bond-car-rental')
    const reservationInfo = bond_car_rental.collection('reservationInfo')




    







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



