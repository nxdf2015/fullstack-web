const mongoose = require('mongoose')
const { PASSWORD } = require("./config")

const connect = async (password) =>
  await mongoose.connect(
    `mongodb+srv://admin:${password}@cluster0.llwdf.mongodb.net/phonebook?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

  connect(PASSWORD)

