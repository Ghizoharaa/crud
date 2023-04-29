const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const userRoutes = require('./routes/UserRoutes')
const requestsRoutes = require('./routes/RequestsRouter')
const app = express();
app.use(cors());



mongoose.connect('mongodb+srv://admin:admin@cluster0.qcyyspp.mongodb.net/dashboard?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// User routes
app.get('/', userRoutes)
app.get('/user', userRoutes)
app.post('/signup', userRoutes)
app.delete('/user/:id', userRoutes)

// Requests Routes

app.get('/requests/form', requestsRoutes)
app.post('/addRequest', requestsRoutes)
app.get('/requests', requestsRoutes)
app.delete('/requests/:id', requestsRoutes)


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
