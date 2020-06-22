const Twitter = require("twitter");
const app = require("express")();
const PORT = 3001;
require('dotenv').config();

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const getTweets = async ( req, res ) => {
    try {
        const { search } = req.query;
        const twitterQueries = {
            q: search,
            result_type: "popular", //mixed recent popular
            lang: "en",
            tweet_mode:"extended",
            count: 100
        }
        const data = await client.get("/search/tweets", twitterQueries);
        const { statuses } = data;
        res.json({
            message: "OK",
            statuses,
            status: 200
        })
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

app.get("/api/tweets", getTweets)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})