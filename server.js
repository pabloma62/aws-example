const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Polma was here :p</h1>'))

app.listen(3000);
console.log('Server on port 3000')

