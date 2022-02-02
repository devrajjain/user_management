const userService = require('../../../services/user')
const jwt = require('jsonwebtoken');

module.exports = () => {
  return (req, res) => {
    try {
      const {id, name, email, mobile, profile_picture } = req.body;
      if (!(id && email && name && mobile && profile_picture)) {
        res.status(400).send("Invalid params");
      }
      if (req.user.user_id == id) {
        user = userService.getUser(req.user.user_id)[0]
        console.log(user)
        otherUser = userService.getUserByEmail(email)[0]
        if(otherUser && (otherUser.id != user.id)) {
          return res.status(409).send("Email Already taken. Please enter another email-id");
        }
        const updatedUser = userService.updateUser(user.id, name, email, mobile, user.password, profile_picture, user.token)
        u = updatedUser[0]
        res.status(200).json({
          status: true,
          data: { id: u.id, name: u.name, email: u.email, mobile: u.mobile, profile_picture: u.profile_picture }
        })
      } else {
        res.status(400).json({
          status: false,
          message: "Access Denied"
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
