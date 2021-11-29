import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const port = 8080;

app.get('/',  async (req, res) => {
    const response = await fetch("https://open-api.myhelsinki.fi/v2/places/?tags_search=Beach")
    const data = await response.json()
    res.header('Access-Control-Allow-Origin', '*')
   res.json(await data)
})

app.get("/:id", async (req, res) => {
    const id = req.params.id
    const response = await fetch(`https://open-api.myhelsinki.fi/v1/place/${id}`)
    const data = await response.json()

    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
