const Sequelize = require("sequelize");

console.log("hi");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database.sqlite"
});

class User extends Sequelize.Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "User"
  }
);

db.sync({ force: true })
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
