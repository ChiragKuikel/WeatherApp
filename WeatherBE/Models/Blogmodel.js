const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WriterModel",
      required: true,
    },
    Heading: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 50,
    },
    Body: {
      type: String,
      required: true,
      minlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogModel", blogSchema);
