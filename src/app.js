const express = require('express');
const { userControler } = require('./controllers');
const { validateToken } = require('./middleware/token');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userControler.login);
app.post('/user', userControler.addUser);
app.get('/user', validateToken, userControler.getUsers);
app.get('/user/:id', validateToken, userControler.getUserById);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
