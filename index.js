const express = require('express') ;
const app = express() ;
const movies = require("./movies")
const port = 8000 ;

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list")
})

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies)
})

app.get("/api/movies/:id", (req, res) => {
  if(req.params.id < 3){  
  res.status(200).json(movies[`${req.params.id}`])}
  else {res.status(404).send('Not Found')}
});

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});