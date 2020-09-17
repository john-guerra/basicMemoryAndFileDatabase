function MemoryDatabase() {
  let mydb = {};
  let students = [{ name: "John" }, { name: "Mafe" }, { name: "Sonia" }];

  mydb.getStudents = () => students;
  mydb.addStudent = (name) => students.push({ name });

  return mydb;
}

module.exports = MemoryDatabase();
