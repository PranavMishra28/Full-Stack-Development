//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  nmae: {
    type: String,
    required: [true, "Please check your data entry"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "pretty solid as a fruit",
});

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);


const person = new Person({
  name: "John",
  age: 37,
  favoriteFruit: kiwi
});

person.save();

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// });

// Fruit.updateOne({id: ''}, {name: 'xyz'}, function(err){
//     if (err) {
//     console.log(err);
//     } else {
//     console.log(fruits);
//     }
// });