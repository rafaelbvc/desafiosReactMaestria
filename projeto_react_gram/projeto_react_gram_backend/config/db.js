const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = async () => {
  try {
    const dbcConnect = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.h6zj5rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(error);
  }
};

connect();

module.exports = connect;
