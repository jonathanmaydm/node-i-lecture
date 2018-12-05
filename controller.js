const { students } = require("./students");

/**
 * All express handler functions have three
 * parameters - request, response, and next -
 * often shortened to req, res, next.
 */

const getStudents = (req, res, next) => {
  /**
   * res allows us to build or modify the
   * response that is sent back to the client.
   * res.json() ensures that the data is sent
   * as a json object.
   */
  res.json(students);
};

const getStudent = (req, res, next) => {
  /**
   * Url parameters are available as properties
   * on the req.params object.
   */
  const id = req.params.id;
  const student = students.find(student => +student.id === +id);
  if (!student) {
    /**
     * The default status for a response is 200 - OK.
     * We can change this by using res.status() and passing
     * in the status code we want to use. We still need
     * to use .json afterwards to actually send data.
     */
    res.status(400).json({ error: "No student found. :(" });
  } else {
    res.json(student);
  }
};

const addStudent = (req, res, next) => {
  /**
   * Inside of our handler functions, we just use
   * regular Javascript. You can console.log
   * any value and it will display in your terminal
   * where you are running node or nodemon.
   */
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

/**
 * module.exports is the Node way
 * of exporting code to be used
 * in another file. In this case, it
 * is an object whose values are all
 * functions.
 */
module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent
};
