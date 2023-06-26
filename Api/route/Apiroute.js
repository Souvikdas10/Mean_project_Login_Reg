const express = require('express');
const route = express.Router();
const controller = require('../controller/Apicountroller')

route.post('/addemp', controller.addemp)

route.post('/logemp',controller.logemp)

route.get('/getemp', controller.getemp)

route.get('/editemp/:id', controller.edit)

route.put('/updateemp/:id', controller.updateemp)

route.delete('/deleteemp/:id', controller.deleteemp)


module.exports = route;