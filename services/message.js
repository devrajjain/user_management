const getUserMessage = (method) => {
  let message = ''
  switch (method) {
    case 'GET':
      message = "Hello from get"
      break;

    case 'POST':
      message = "Hello from post"
      break;
  
    default:
      message = "Hello"
      break;
  }
  return message
}



module.exports = {
  getUserMessage
}