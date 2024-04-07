const {
    MongoClient
} = require('mongodb');

const uri = 'mongodb+srv://manasishewale9:Mxnxsi@cluster0.9mputlx.mongodb.net/Battlefield4';
const client = new MongoClient(uri);
const fetchData = async() => {

    try {
        await client.connect();

        // Access the collections
        const gameStatsCollection = client.db('Battlefield4').collection('gameStats');
        const soldierMenuCollection = client.db('Battlefield4').collection('soldierMenu');
        const TopGameStatsCollection = client.db('Battlefield4').collection('TopGameStats');

        // Fetch all data from both collections
        const gameStatsData = await gameStatsCollection.find({}).sort({
            sequence: 1
        }).toArray();
        const soldierMenuData = await soldierMenuCollection.find({}).sort({
            sequence: 1
        }).toArray();
        const TopGameStatsData = await TopGameStatsCollection.find({}).sort({
            sequence: 1
        }).toArray();


        return {
            gamestats: gameStatsData,
            soldierMenu: soldierMenuData,
            TopGameStats: TopGameStatsData
        };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
};
module.exports = fetchData;