const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let services = [
    ];

app.post('/services', (req, res) => {
    services.push({
        id: services.length + 1,
        body: req.body,
        state: 'activ'
    })
    res.send()
})

app.get('/a', (req, res) => {
        res.send('working')
})

app.listen(port, () => console.log(`Listening on port ${port}`));