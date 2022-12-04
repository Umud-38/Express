const fs = require("fs");

fs.readFile("./data.json", "utf8", (err, data) => {
  if (!err) {
    const express = require("express");
    const app = express();

    app.get("/user", function (req, res) {
      res.send(data);
    });

    app.listen(3000, function () {
      console.log("Example app listening on port 3000!");
    });
  } else {
    console.error(err);
  }
});

