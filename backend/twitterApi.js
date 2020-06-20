const Twitter = require("twitter");
const app = require("express")();
const PORT = 3001;

const client = new Twitter({
    consumer_key: 'LEiQwQnz6rqzS1Z4kSaeTaSKy',
    consumer_secret: '2fhe1SPDpQbVqvaF1GnI813tGBhrrWj2tZmvGK0iQI0RWok2ar',
    access_token_key: '1175831588828876800-5TgsZhmGx5HicAG8mXd29YyvbxVGSD',
    access_token_secret: 'V5cuHhEe4oVEarWyEdWj6rNV12hD3QSJxFrk8icRBaju0'
})

const getTweets = async ( req, res ) => {
    try {
        const { search } = req.query;
        const twitterQueries = {
            q: search,
            result_type: "popular",
            tweet_mode:"extended"
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