import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Post = db.define("posts", {
  author: DataTypes.STRING,
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
});

export default Post;
