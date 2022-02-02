const userService = require('../../../services/user')

module.exports = () => {
  return (req, res) => {
    const users = userService.getAllUsers()
    res.status(200).json({
      status: true,
      data: users
    })
    
  }
}