const { students } = require("./students");

const getStudents = (req, res, next) => {
  res.json(students);
};

const getStudent = (req, res, next) => {
  const id = req.params.id;
  const student = students.find(student => +student.id === +id);
  if (!student) {
    res.status(400).json({ error: "No student found. :(" });
  } else {
    res.json(student);
  }
};

const addStudent = (req, res, next) => {
  req.body.id = students.length;
  students.push(req.body);
  res.json(students);
};

const deleteStudent = (req, res, next) => {
  const index = students.findIndex(student => +student.id === +req.params.id);
  students.splice(index, 1);
  res.json(students);
};

const updateStudent = (req, res, next) => {
  const index = students.findIndex(student => +student.id === +req.params.id);

  students[index] = req.body;
  res.json(students);
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent
};
