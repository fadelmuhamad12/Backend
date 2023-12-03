const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection Open!!!");
  })
  .catch((err) => {
    console.log("Error Saat Koneksi");
    console.log(err);
  });


  const movieSchema =  new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
  })

  const Movie = mongoose.model('Movie', movieSchema)


  // BUAT MASUKIN KE DATABASE
  Movie.insertMany([
    {title: "Outer Banks", year: 2020, score: 9.2, rating: "pg-12" },
    {title: "Night Agent", year: 2021, score: 8.2, rating: "pg-13" },
    {title: "Messi", year: 2021, score: 84, rating: "pg-20" },
    ]).then((data)=> {
      console.log('it worked');
      console.log(data);
    })