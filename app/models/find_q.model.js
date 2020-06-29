module.exports = (sequelize, Sequelize) => {
  const Find = sequelize.define("find_q", {
    find_q: {
      type: Sequelize.STRING
    }
  });

  return Find;
};
