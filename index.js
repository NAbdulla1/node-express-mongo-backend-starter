const express = require("express");

app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json('asdf');
});

app.listen(3000, () => {
  console.log(`server is listening on 3000`);
});
