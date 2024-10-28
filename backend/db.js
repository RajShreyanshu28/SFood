const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shreyanshutheguy7:shreyanshu@cluster1.xxgbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

module.exports = async function (callback) {
    try {
        // Use async/await instead of callback
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to MongoDB");

        const foodCollection = await mongoose.connection.db.collection("food_items");
        const foodData = await foodCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("foodCategory");
        const categoryData = await categoryCollection.find({}).toArray();

        callback(null, foodData, categoryData); // Call the callback with the data
    } catch (err) {
        console.log("---" + err);
        callback(err, null, null); // Call the callback with the error
    }
};
