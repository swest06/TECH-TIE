const mongoose = require("mongoose");
const config = require("config");

//gets uri value from db.json in config
const db = config.get("mongoURI");

//asyncronously connect to database
const dbConnect = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = dbConnect;
