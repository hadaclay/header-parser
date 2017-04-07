const express = require('express');
const whoami = require('./whoami');
const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', whoami);

app.listen(app.get('port'));
