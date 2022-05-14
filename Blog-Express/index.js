const express = require('express');
var exphbs = require('express-handlebars');

const port = 3000;
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware
const blogRoute = require('./routes/blog');
app.use('/', blogRoute);

// To make static folder available on browser (serve static as static folder)
app.use('/static', express.static('static'));

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
});