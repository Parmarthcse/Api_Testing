const express = require('express');
const users = require("./fake_user_data.json")
const app = express();
const PORT = 4000;
app.get('/api/users', (req, res) => {
    
    return res.json(users);
  });

  app
  .route("/api/users/id")
  .get((req, res) => {
    const id  = Number (req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user);
  })
  .put((req, res) => {
return res.json({status : "pending"
    //edit user with id
})
  })
  .delete((req, res) => {
    return res.json({status : "pending"
        //delete user with id
    })
  })
  
  post("/api/users", (req, res) => {
    return res.json({status : "pending"})
  })
  

//   app.get('/users', (req, res) => {
//     const html = `
//         <ul>
//             ${users.map((user) => `<li>${user.name}</li>`).join('')}
//         </ul>
//     `;
//     res.send(html);
// });

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))