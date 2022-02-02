// const { use } = require("express/lib/application")

var AllUsers = [
  {
    "id": 1,
    "name": "test2",
    "email": "test2@gmail.com",
    "mobile": 45678545456,
    "password": "$2a$10$Fi0FEDLMSR/jHfXk9cNR8u.gKTwH8LjmOZFNFbqEnjTkqfhNG2Iee",
    "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiKCkgPT4ge1xyXG4gIHJldHVybiBBbGxVc2Vycy5sZW5ndGhcclxufTEiLCJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTY0MzgyNDczMiwiZXhwIjoxNjQzODMxOTMyfQ.dD1SLFHSt7nkIIko4XH6BnrRgELqB5Z9IIpKtmu6h5o"
  },
  {
    "id": 2,
    "name": "test",
    "email": "test@gmail.com",
    "mobile": 45678545456,
    "password": "$2a$10$9Q3h/VDj5GnglPG1KZwKP.yJJRANWGjo2lZnxXUBJ3hqSgsANZ6kO",
    "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiKCkgPT4ge1xyXG4gIHJldHVybiBBbGxVc2Vycy5sZW5ndGhcclxufTEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjQzODI0NzQ5LCJleHAiOjE2NDM4MzE5NDl9.tl9lhZrWttFxavzOH06YC1mmhM9iDI47YX6D2kgZFl8"
  },
  {
    "id": 3,
    "name": "test3",
    "email": "test3@gmail.com",
    "mobile": 45678545456,
    "password": "$2a$10$aeN.KuMktSieVQzz3b4C7eZZtHUonA3cIuDMggjla.88PRZm6JdaC",
    "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiKCkgPT4ge1xyXG4gIHJldHVybiBBbGxVc2Vycy5sZW5ndGhcclxufTEiLCJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsImlhdCI6MTY0MzgyNDc2MywiZXhwIjoxNjQzODMxOTYzfQ.l0LbqGVqbO0-qeBXypeo308EMfNfBdUdBiwZJaHylxI"
  }
]

const getAllUsers = () => {
  records = AllUsers
  for (var i = 0; i < records.length; i++) {
    delete records[i].password;
    delete records[i].token;
  }
  return records
}


const getUser = (id) => {
  const user = AllUsers.filter((u) => u.id == id)
  return user
}

const getUserByEmail = (email) => {
  const user = AllUsers.filter((u) => u.email == email)
  return user
}

const insertUser = (name, email, mobile, password, profile_picture, token) => {
  const newId = AllUsers.length + 1
  const newUser = {id: newId, name: name, email: email, mobile: mobile, password: password, profile_picture: profile_picture, token: token}
  AllUsers.push(newUser)
  return newUser
}

const totalUserCount = () => {
  return AllUsers.length
}

const updateUser = (id, name, email, mobile, password, profile_picture, token) => {
  otherUsers =  AllUsers.filter((u) => u.id != id)
  otherUsers.push({ id: id, name: name, email: email, mobile: mobile, password: password, profile_picture: profile_picture, token: token })
  AllUsers = otherUsers.sort(function (a, b) { return a.id - b.id });
  return getUser(id)
}

const resetPassword = (id, new_password) => {
  AllUsers = AllUsers.map( a => {
    if (a.id == id) {
      a.password = new_password
    }
    return a
  })
}

module.exports = {
  getAllUsers,
  getUser,
  getUserByEmail,
  insertUser,
  totalUserCount,
  updateUser,
  resetPassword
}