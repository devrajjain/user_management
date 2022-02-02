# User Management (Node js Assignment)
This is a basic user management system made using Node js.  

**End-points:**
1. POST `/api/v1/user/register` 
   - Description: To register user
   - Sample Request Body:  
     ```
      {
        "name": "test",
        "email": "test@gmail.com",
        "mobile": 45678545456,
        "password": "12345",
        "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
      }
     ```
    - Sample Response:  
      ```
        {
          "status": true,
          "message": "User registerd: {id: 1, name: test}",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiKCkgPT4ge1xyXG4gIHJldHVybiBBbGxVc2Vycy5sZW5ndGhcclxufTEiLCJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsImlhdCI6MTY0MzgyNDc2MywiZXhwIjoxNjQzODMxOTYzfQ.l0LbqGVqbO0-qeBXypeo308EMfNfBdUdBiwZJaHylxI"
        }
      ```
  ---
  
2. POST `/api/v1/user/login`  
   - Description: To login a user
   - Sample Request Body:  
     ```
      {
        "email": "test@gmail.com",
        "password": "12345"
      }
     ```
   - Sample Response:  
      ```
       {
          "status": true,
          "data": {
              "id": 1,
              "name": "test2",
              "email": "test2@gmail.com",
              "mobile": 45678545456,
              "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTY0MzgyOTgzNSwiZXhwIjoxNjQzODM3MDM1fQ.j5V_42ybkSOklAjx0WFvAJDwX-oC5viybG819sdERaM"
          }
      }
      ```
  ---
  
3. GET `/api/v1/user/all`
   - Description: To fetch list of all users
   - Requires jwt token as Bearer for authentication
   - Sample Response:  
      ```
       {
          "status": true,
          "data": [
              {
                  "id": 1,
                  "name": "test",
                  "email": "test@gmail.com",
                  "mobile": 45678456456,
                  "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
              },
              {
                  "id": 2,
                  "name": "test2",
                  "email": "test2@gmail.com",
                  "mobile": 95678545456,
                  "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
              },
              .....
          ]
      }
      ```
  ---
  
  4. GET `/api/v1/user/:id`
   - Description: To fetch a single user using id of that user
   - Requires jwt token as Bearer for authentication
   - Sample Response:  
      ```
       {
          "status": true,
          "data": {
              "id": 1,
              "name": "test",
              "email": "test@gmail.com",
              "mobile": 45678456456,
              "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
          }
       }
      ```
  ---
 
   5. GET `/api/v1/user/self`
   - Description: To fetch own information
   - Requires jwt token as Bearer for authentication
   - Sample Response:  
      ```
       {
          "status": true,
          "data": {
              "id": 1,
              "name": "test",
              "email": "test@gmail.com",
              "mobile": 45678456456,
              "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
          }
       }
      ```
  ---
  
  6. PUT `/api/v1/user/update`
   - Description: To update user information
   - Requires jwt token as Bearer for authentication
   - Sample Request Body:
      ```
      {
          "id": 1,
          "name": "updated name",
          "email": "test2@gmail.com",
          "mobile": 5432154321,
          "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
      }
      ```
   - Sample Response:  
      ```
       {
          "status": true,
          "data": {
              "id": 1,
              "name": "updated name",
              "email": "test2@gmail.com",
              "mobile": 5432154321,
              "profile_picture": "https://www.olympus-imaging.co.in/content/000107507.jpg"
          }
       }
      ```
  ---
  
 7. PATCH `/api/v1/user/resetpassword`
   - Description: To reset password
   - Requires jwt token as Bearer for authentication
   - Sample Request Body:
      ```
      {
          "id": 1,
          "current_password": "12345",
          "new_password": "abcd@123"
      }
      ```
   - Sample Response:  
      ```
      {
          "status": true,
          "message": "Password reset successfully"
      }
      ```
  ---
  
  
