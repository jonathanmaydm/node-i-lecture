const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");
const app = express();
const PORT = 5050;

app.use(json());

app.get("/api/students", controller.getStudents);
app.get("/api/students/:id", controller.getStudent);
app.post("/api/students", controller.addStudent);
app.delete("/api/students/:id", controller.deleteStudent);
app.put("/api/students/:id", controller.updateStudent);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
