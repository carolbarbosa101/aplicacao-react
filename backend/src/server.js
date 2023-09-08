const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();// criaremos um objeto com nome de app utlizando express

app.use(express.json());// preciso falar pro express que vamos trabalhar com json
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3001, () => {
    console.log('listening on port 3000');
}); 