module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING(20)
    },
    nickname: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    find_a: {
      type: Sequelize.STRING
    }
  });

  return User;
};
