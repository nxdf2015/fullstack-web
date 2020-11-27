const mongoose = require("mongoose");
const blogs = require("../data");

const { User } = require("./user");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  url: { type: String, required: true },
  likes: Number,
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    /* eslint-disable --  mutate object*/
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    /* eslint-enable */
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
