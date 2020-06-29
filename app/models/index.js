const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.comment = require("../models/comment.model.js")(sequelize, Sequelize);
db.facility = require("../models/facility.model.js")(sequelize, Sequelize);
db.building = require("../models/building.model.js")(sequelize, Sequelize);
db.find_q = require("../models/find_q.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.user.belongsTo(db.find_q, { foreignKey: 'find_id'});
db.comment.belongsTo(db.user, { foreignKey: 'user_id'});
db.building.hasMany(db.comment);
db.building.hasMany(db.facility);


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
