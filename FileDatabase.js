const fs = require("fs");

function FileDatabase() {
  let mydb = {};

  mydb.getStudents = () => {
    return fs.readFileSync("students.txt", "utf8").split("\n");
  };

  // Create a function for searching if a student is in the database

  mydb.addStudent = (name) => {
    const students = mydb.getStudents();

    students.push(name);

    fs.writeFileSync("students.txt", students.join("\n"), "utf8");
  };

  return mydb;
}

module.exports = FileDatabase();
