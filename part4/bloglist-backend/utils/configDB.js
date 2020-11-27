const mongoose = require('mongoose');
const { PASSWORD, NODE_ENV } = require('./config');

let nameDB = 'bloglist';
if (NODE_ENV === "TEST") {
    nameDB = "bloglist_test";
}
const url_db = `mongodb+srv://admin:${PASSWORD}@cluster0.llwdf.mongodb.net/${nameDB}?retryWrites=true&w=majority`;
mongoose.connect(url_db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
