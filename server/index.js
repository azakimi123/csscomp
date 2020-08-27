require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authCtrl");
const memeCtrl = require("./controllers/memeCtrl");
const middleware = require("./middleware/authMiddleware");


const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then((db) => {
    app.set("db", db);
    console.log(`db connected`)
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52
     }
   })
);

app.use(express.json());

// authentication endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

// meme endpoint
app.get('/api/meme', middleware.isAdmin, memeCtrl.getMeme);


app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});