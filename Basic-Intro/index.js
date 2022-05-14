const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About!');
});

app.get('/file', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/user/:name', (req, res) => {
    res.json({
        'name': req.params.name,
        'age': 22,
        'email': 'codewithwaqar11@gmail.com'
    });
});

// Middleware
// To make public folder available on browser (serve public as static folder)
app.use('/public', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});