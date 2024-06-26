const mongoose = require("mongoose")
const { MONGO_URI } = require("../config")

const connectionDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Database connected!")
  } catch (error) {
    console.log("Error to connect MongoDB")
    throw new Error("Failed to connect database!")
  }
}

module.exports = connectionDB