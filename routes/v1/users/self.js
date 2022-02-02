const userService = require('../../../services/user')

module.exports = () => {
  return (req, res) => {
    const user = userService.getUser(req.user.user_id)
    if (user.length > 0) {
      u = user[0]
      res.status(200).json({
        status: true,
        data: { id: u.id, name: u.name, email: u.email, mobile: u.mobile, profile_picture: u.profile_picture }
      })
    } else {
      res.status(404).json({
        status: false,
        message: "User not found"
      })
    }

  }
}