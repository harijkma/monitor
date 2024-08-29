import express from 'express';

const app = express();

const port = 5001;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send("ok");
});

app.post("/listen", (req, res) => {
    console.log("Received data:", req.body);  // Added log for received data
    if (req.body) {
        console.log("Battery Status:", req.body);
    } else {
        console.log("No data received or data format is incorrect.");
    }
    return res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
