const express = require('express');
const app = express();
const db = require('./db');

// Built in feature in express. 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use('/api/videos', require('./src/routes/api/videos'));
app.use('/api/playlists', require('./src/routes/api/playlist'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));