const express = require('express');
const server = express();
const mainRoute = require('./routes/main');
//приєднуєм шаблонізатор ejs
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + '/public'));

server.use('/', mainRoute);
server.listen(3000);