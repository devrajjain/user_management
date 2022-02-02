const userService = require('../../../services/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = () => {
  return (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const data = userService.getUserByEmail(email)
      user = data[0]
      if (user && (bcrypt.compareSync(password, user.password))) {
        const token = jwt.sign(
          { user_id: user.id, email },
          "mysecret",
          {
            expiresIn: "2h",
          }
        );
        const updatedUser = userService.updateUser(user.id, user.name, user.email, user.mobile, user.password, user.profile_picture, token)
        u = updatedUser[0]
        res.status(200).json({
          status: true,
          data: { id: u.id, name: u.name, email: u.email, mobile: u.mobile, profile_picture: u.profile_picture, token: u.token }
        })
      } else {
        res.status(400).json({
          status: true,
          message: "Invalid Credentials"
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
