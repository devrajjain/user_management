const userService = require('../../../services/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = () => {
  return (req, res) => {
    try {
      const { name, email, mobile, password, profile_picture } = req.body;
      if (!(email && password && name && mobile && profile_picture)) {
        res.status(400).send("All input is required");
      }
      const oldUser = userService.getUserByEmail(email)
      if (oldUser.length > 0) {
        return res.status(409).send("User Already Exist. Please Login");
      }
      encryptedPassword = bcrypt.hashSync(password, 10);
      newID = userService.totalUserCount + 1
      const token = jwt.sign(
        { user_id: newID, email },
        "mysecret",
        {
          expiresIn: "2h",
        }
      );
      const user = userService.insertUser(name, email.toLowerCase(), mobile, encryptedPassword, profile_picture, token)

      res.status(201).json({
        status: true,
        message: `User registerd: {id: ${user.id}, name: ${user.name}}`,
        token: user.token
      })
    } catch (err) {
      console.log(err);
    }
  }
}