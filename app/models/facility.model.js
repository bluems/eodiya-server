module.exports = (sequelize, Sequelize) => {
  const Facility = sequelize.define("facility", {
    facility_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    facility_name: {
      type: Sequelize.STRING
    },
    closed: {
      type: Sequelize.STRING
    },
    weekday_start: {
      type: Sequelize.STRING(5)
    },
    weekday_end: {
      type: Sequelize.STRING(5)
    },
    weekend_start: {
      type: Sequelize.STRING(5)
    },
    weekend_end: {
      type: Sequelize.STRING(5)
    },
    paid: {
      type: Sequelize.STRING(1)
    },
    paid_std_time: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    usage_fee: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    overtime_std: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    overrime_usage_fee: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    application: {
      type: Sequelize.STRING(5)
    },
    tel: {
      type: Sequelize.STRING(12)
    },
    website: {
      type: Sequelize.STRING
    }
  });

  return Facility;
};
