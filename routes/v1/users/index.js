const routes = require('express').Router()
const auth = require("../../../middleware/auth");

module.exports = () => {
  routes.get('/all', auth, require('./getAllUsers')())
  routes.post('/login', require('./login')())
  routes.get('/self', auth, require('./self')())
  routes.get('/:id', auth, require('./get_user')())
  routes.post('/register', require('./register')())
  routes.put('/update', auth, require('./update')())
  routes.patch('/resetpassword', auth, require('./reset_password')())
  return routes
}