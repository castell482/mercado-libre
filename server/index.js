const express = require('express');
const cors = require('cors');
const routerItems = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/api/items', routerItems);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
