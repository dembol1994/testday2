const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

let services = [
    {
        id: 1,
        body: {
            name: 'Damian',
            subtitle: 'Booking',
            minHours: '2',
            maxHours: '3',
            pricePerHour: '12',
            whiteIcon: 'icon1',
            blueIcon: 'icon2',
            usersImage: 'icon3'  
        },
        isActive: 'active' 
    },
    {
        id: 2,
        body: {
            name: 'Magdalena',
            subtitle: 'Short Text',
            minHours: '2',
            maxHours: '3',
            pricePerHour: '12',
            whiteIcon: 'icon1',
            blueIcon: 'icon2',
            usersImage: 'icon3'  
        },
        isActive: 'inactive' 
    },
    {
        id: 3,
        body: {
            name: 'Roman',
            subtitle: 'Nie wiem nic',
            minHours: '2',
            maxHours: '3',
            pricePerHour: '12',
            whiteIcon: 'icon1',
            blueIcon: 'icon2',
            usersImage: 'icon3'  
        },
        isActive: 'active' 
    },
    ];

app.post('/services', (req, res) => {
    
    services.push({
        id: services.length + 1,
        body: req.body,
        isActive: 'active'
    })
    res.send()
})

app.put('/services', (req, res) => {
    services[req.query.id - 1] = {
        id: req.query.id,
        body: req.body,
        isActive: req.query.active === 'true' ? 'active' : 'inactive'}
    res.send();
})

app.get('/services', (req, res) => {
    if (!req.query.active) {
        res.send(services)
    }   else {
            let data = [];
            services.forEach(el => {
                if (!el) return;
                if (el.isActive === req.query.active) data.push(el)
            })
            res.send(data)
    }
})

app.get('/edit', (req, res) => {
    let data;
    services.forEach(el => {
        if (!el) return;
        if (el.id == req.query.id) data = el;
    })
    res.send(data);
})

app.delete('/services', (req, res) => {
    services[req.query.id - 1] = undefined;
    console.log(services)
    res.send()
})

app.listen(port, () => console.log(`Listening on port ${port}`));