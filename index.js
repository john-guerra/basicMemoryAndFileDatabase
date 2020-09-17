const express = require("express");

const app = express();
const PORT = process.env.PORT | 7000;

// const mydb = require("./MemoryDatabase.js");

const mydb = require("./FileDatabase.js");

app.get("/", (req, res) => {
  console.log("get /");
  const before = new Date();
  const students = mydb.getStudents();
  res.json({ students: students, time: new Date() - before });
});

// Create an endpoint for searching if a student is in the database

app.get("/addStudent/:name", (req, res) => {
  console.log("get /addStudent");
  const before = new Date();

  mydb.addStudent(req.params.name);
  res.json({
    inserted: true,
    students: mydb.getStudents(),
    time: new Date() - before,
  });
});

app.listen(PORT, () => {
  console.log(`Listening for connections on http://localhost:${PORT}`);
});
