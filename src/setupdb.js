const Sequelize = require("sequelize");

console.log("hi");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database.sqlite"
});

db.authenticate()
  .then(() => {
    console.log("success");
  })
  .catch((err) => console.log("error"));

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
User.sync({ force: true }).then(() => {
  return User.create({
    username: "Byron",
    password: "12345678"
  });
});
