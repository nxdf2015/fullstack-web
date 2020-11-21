const mongoose = require("mongoose");

const services = require("./service/dataMongo");

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

async function parseData() {
  const [password, ...person] = process.argv.slice(2);
  try {
    await connect(password);
    if (person.length) {
      const response = await services.addOne({
        name: person[0],
        number: parseInt(person[1]),
      });
      const message = response.name + " added to the phonebook";
      console.log(message);
    } else {
      const response = await services.getAll();
      response.forEach((person) =>
        console.log(person.name, "-", person.number)
      );
    }
  } catch (error) {
    console.log(error.message);
  }
  finally{
      mongoose.connection.close();

  }
}


if (require.main === module ){
    parseData()
}