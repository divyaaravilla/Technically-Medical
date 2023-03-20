import mongoose from "mongoose";
import User from "./src/model/userSchema.js";

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/c0839829", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    lastName: "Tyson",
    firstName: "Mike",
    dob: "2010-11-09",
    address1: "123 Copland Road",
    address2: "124 Crescent Avenue",
    city: "Sarnia",
    postalCode: "N1B 1U5",
    country: "Canada",
    phoneNumber: "12345666",
    email: "mike2@mike2.com",
    note: "Mike is the champ.",
  },
  {
    lastName: "Timalsina",
    firstName: "Aseem",
    dob: "2022-07-23",
    address1: "120",
    address2: "Smithers Crescent",
    city: "Sarnia",
    postalCode: "L6Y3K9",
    country: "Canada",
    phoneNumber: "2263496652",
    email: "aseem.tim@gmail.com",
    note: "HTML is easy!",
  },
  {
    lastName: "Parker",
    firstName: "Peter",
    dob: "2022-12-05",
    address1: "12 London Road",
    address2: "14 Toronto Road",
    city: "Toronto",
    postalCode: "L6T 3RT",
    country: "Canada",
    phoneNumber: "9876543",
    email: "peter@parker.com",
    note: "Your friendly neighborhood Spider Man ",
  },
  {
    lastName: "Wayne",
    firstName: "Bruce",
    dob: "2012-12-05",
    address1: "12 British Road",
    address2: "14 Mississauga Road",
    city: "London",
    postalCode: "L6T 3RC",
    country: "Canada",
    phoneNumber: "1876543",
    email: "bruce@wayne.com",
    note: "I am vengeance! ",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedProducts);
};

seedDB().then(() => {
  mongoose.connection.close();
});
