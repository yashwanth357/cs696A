import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import redisClient from "./db/redis.js";
import messageQueue from "./db/bull.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const value = await redisClient.get(restaurant_id);
    if (value) {
    res.send({"cached": true, "value": JSON.parse(value)});
    } else {
    const dbValue = await db.collection("restaurants").findOne({
    restaurant_id: restaurant_id,
    });
    if (dbValue) {
    await redisClient.set(restaurant_id, JSON.stringify(dbValue));
    res.send({"cached": false, "value": dbValue});
    } else {
    res.status(500).send("Not Found");
    }
    }
    });

app.post('/restaurants', function(req, res) {
    const restaurant_id = req.body['restaurant_id'];
    const name = req.body['name'];
    const borough = req.body['borough'];
    const cuisine = req.body['cuisine'];

    db.collection("restaurants").insertOne({
        restaurant_id: restaurant_id,
        name: name,
        borough: borough,
        cuisine: cuisine
    }).then(result => result.acknowledged ?
        res.send({restaurant_id, name, borough, cuisine}) :
        res.status(500).send("Failed")
    ).catch(() => res.status(500).send("Failed"));
});
app.put('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const updates = req.body["updates"];
    messageQueue.add({
        restaurant_id: restaurant_id, 
        updates: JSON.stringify(updates)
    });
    res.send("Message Queued");
});

app.delete('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    
    const cachedValue = await redisClient.get(restaurant_id);
    
    if (cachedValue) {
        await redisClient.del(restaurant_id);
    }
    
    const result = await db.collection("restaurants").deleteOne({
        restaurant_id: restaurant_id,
    });
    
    if (result.deletedCount > 0) {
        res.send({"success": true, "message": "Restaurant deleted successfully."});
    } else {
        res.status(404).send({"success": false, "message": "Restaurant not found."});
    }
});



// New route to retrieve restaurants by borough and cuisine
app.get('/restaurants', function(req, res) {
    const borough = req.query.borough;
    const cuisine = req.query.cuisine;

    // Check if both parameters are provided
    if (!borough || !cuisine) {
        return res.status(400).send("Both borough and cuisine must be provided");
    }

    db.collection("restaurants").find({
        borough: borough,
        cuisine: cuisine
    }).toArray()
    .then(restaurants => {
        if (restaurants.length === 0) {
            return res.status(404).send("No restaurants found");
        }
        res.send(restaurants);
    })
    .catch(() => res.status(500).send("Error retrieving restaurants"));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});