const mongoose = require("mongoose");
const { mongo, env } = require("../config");
const chalk = require("chalk");

// print mongoose logs in dev env
if (env === "development") {
  mongoose.set("debug", true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = async () => {
  try {
    await mongoose.connect(`${mongo.uri}/${mongo.database}`);
    console.log(chalk.blue("Database connection established successfully."));
  } catch (err) {
    console.log(err);
  }
};
