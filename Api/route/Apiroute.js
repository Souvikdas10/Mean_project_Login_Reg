const express = require('express');
const route = express.Router();
const controller = require('../controller/Apicountroller')
const auth = require('../middleware/apiAuth');

route.post('/addemp', controller.addemp)

route.post('/logemp',controller.logemp)

// route.get('/test',auth,controller.test)

route.get('/getemp', controller.getemp)

route.get('/editemp/:id', controller.edit)

route.put('/updateemp/:id', controller.updateemp)

route.delete('/deleteemp/:id', controller.deleteemp)

route.get('/profile',controller.profile)


module.exports = route;