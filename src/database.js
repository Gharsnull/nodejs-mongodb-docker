const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb/test')
    .then((db) => console.log('Connected to MongoDB...', db.connection.host))
    .catch((err) => console.error(err));