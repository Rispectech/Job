const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  id: String,
});

module.exports = mongoose.model("Job", jobSchema);
