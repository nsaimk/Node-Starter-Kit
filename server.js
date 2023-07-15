const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("hello first express");
});

app.get("/codeyourfuture", (req, res) => {
  console.log(req);
  res.send("this is codeyourfuture endpoint");
});

const arr = [{ name: "enes" }, { age: 32 }, { education: "engineering" }];

app.get("/node", (req, res) => {
  console.log(req.query);
  res.send({ arr });
});

app.get("/query", function (req, res) {
  let searchQuery = req.query;
  res.send("Hello World! You searched for " + JSON.stringify(searchQuery));
});

//use method example
app.use(express.json());
app.post("/post", (request, response) => {
  console.log(request.body);
  response.send({ requestBody: request.body });
});

app.listen("3000", () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);

