import express from "express";

const app = express();
const port = 3000;

var userSignedIn = true;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    signedIn: userSignedIn
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    signedIn: userSignedIn
  })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});