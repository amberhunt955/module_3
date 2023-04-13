const mongoose = require("mongoose");

//* Global Configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//* Connection to MongoDB
module.exports = function () {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // setTimeout(() => {
  //   db.close();
  // }, 5000)

  // Listen for error, open, or close on connection
  db.on("error", (error) => console.log(error));
  db.on("open", () => console.log(`Connected to MongoDB`));
  db.on("close", () => console.log(`MongoDB disconnected`));
};
