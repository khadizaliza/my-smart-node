const cors = require('cors')
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
// use middleware
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from my very smart pant!!')
});

const users = [
    {id: 1, name: 'liza', email: 'liza@gmail.com', phone: '0189485751'},
    {id: 2, name: 'rahat', email: 'rahat@gmail.com', phone: '0189485752'},
    {id: 3, name: 'sima', email: 'sima@gmail.com', phone: '0189485753'},
    {id: 4, name: 'rownok', email: 'rownok@gmail.com', phone: '0189485754'},
    {id: 5, name: 'nila', email: 'nila@gmail.com', phone: '0189485755'}
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    //const id = req.params.id;
    const id = parseInt(req.params.id);
    //const user = users[id];
    const user = users.find(u => u.id === id);
    
    res.send(user)
});

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    res.send(req.body)
})

app.listen(port, () => {
    console.log('Listening to port', port)
})





