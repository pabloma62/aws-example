const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>mure que pasa bro</h1>'))

app.listen(3000);
console.log('Server on port 3000')

