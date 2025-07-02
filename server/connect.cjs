const mongoClient = require('mongodb').MongoClient;
// require('dotenv').config({path: './config.env'});

const message = {
    name: "Amity",
    message: "Hello, World!",
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
};

async function connectToDatabase() {
    try {
        // const uri = process.env.ATLAS_URI;
        const uri = 'mongodb+srv://alabasta:mongopass1@cluster0.o5affzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        const client = new mongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        const messages = client.db("shoutbox").collection("messages");
        // Insert a message
        const result = await messages.insertOne(message);
        console.log("Message inserted with ID:", result.insertedId);
        
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        throw error;
    }finally {
        await client.close();
    }
}