import Sequelize from "sequelize";

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

export default User;
