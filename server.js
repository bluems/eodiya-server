const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//const exec = require('child_process').exec;

var flushDB = false;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
const Find = db.find_q;

if (flushDB == true) {
  db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    initial();
  });


} else db.sequelize.sync();
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//  console.log('Drop and Resync Database with { force: true }');
//  initial();
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to eodiya API Server" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/finder.routes')(app);
require('./app/routes/building.routes.js')(app);
require('./app/routes/facility.routes.js')(app);
require('./app/routes/comment.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 28080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });

  Find.create({
    id: 1,
    find_q: "태어난 고향은?"
  });

  Find.create({
    id: 2,
    find_q: "초등학교 첫 짝꿍 이름은?"
  });

  Find.create({
    id: 3,
    find_q: "좋아하는 음식은?"
  });

  Find.create({
    id: 4,
    find_q: "추억이 많은 장소는?"
  });

  Find.create({
    id: 5,
    find_q: "보고싶은 사람은?"
  });

}
