const express = require('express');
const path = require('path');
const db = require('./../database/models/');
const cors = require('cors');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));

app.get('/api/toolbar/songs', (req, res) => {
  db.Song.findAll({}).then((data) => res.send(data));
});

const PORT = 3003;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));