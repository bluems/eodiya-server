module.exports = (sequelize, Sequelize) => {
  const Building = sequelize.define("building", {
    build_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    build_name: {
      type: Sequelize.STRING
    },
    latitude: {
      type: Sequelize.DECIMAL(10,8)
    },
    longitude: {
      type: Sequelize.DECIMAL(10,7)
    },
    address_street: {
      type: Sequelize.STRING
    },
    last_update: {
      type: Sequelize.DATE
    }
  });

  return Building;
};
