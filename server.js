const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to onlyweebs application." });
});
require("./routes/anime.routes.js")(app);
require("./routes/article.routes.js")(app);
require("./routes/user.routes.js")(app);
app.listen(3000, () => {});
