const express = require('express');
const bodyPaarser = require('body-parser');
const morgan = require('morgan');

const contactRoute = require('./app/routes/contact.route');

const app = express();

app.use(bodyPaarser.urlencoded({ extended: true }));
app.use(bodyPaarser.json())
app.use(morgan('tiny'));

const PORT = process.env.PORT || 1010;

app.get('/', (req, res) => {
    console.log('Welcome to contacts application');
    res.send('Welcome to contacts application')
})

app.use('/contacts', contactRoute);

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})