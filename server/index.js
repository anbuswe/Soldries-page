const express = require("express");
const fetchData = require("./db");

const app = express();
const PORT = 5000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://battlefield4-client.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.get("/", (req, res) => {
    res.send("the server is running")
})
app.get("/api/data", async(req, res) => {
    res.sendStatus(200);
    try {
        const data = await fetchData();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});