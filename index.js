/**
 * express is a library that makes it
 * easier to create HTTP servers
 *
 * body-parser is a library that makes
 * the body (or data) of a request
 * available to us as req.body
 * */

const express = require("express");
const { json } = require("body-parser");

/**
 * Using a controller allows us to clean
 * up our index.js so it is easier to read
 * and reason about. The controller holds
 * the implementation details (or callback
 * functions) for how express should handle
 * each request.
 */
const controller = require("./controller");

/**
 * Invoking express creates an express app
 * for us, which provides convenience methods
 * like .get(), .post(), .put(), and .delete()
 */
const app = express();

/**
 * app.use allows for top-level middleware,
 * or an additional function that runs before
 * our handlers for every single request.
 *
 * json() comes from body-parser and converts
 * the body (or data) sent in a request to a
 * Javascript object and makes it available
 * to us on req.body
 */
app.use(json());

/**
 * Our express app has convenience methods for
 * each HTTP verb (get, post, put, delete). They
 * take in two parameters, a path and a callback
 * function. The callback function is invoked if
 * and only if the path parameter matches the path
 * of the request and uses the correct HTTP verb.
 *
 * Path parameters have a : before the parameter name.
 * These path parameters can be accessed in the
 * callback function as keys of the req.params object.
 * The values are always strings.
 *
 * Ex. With a path of "/api/students/:id"
 * req.params is { id: 'some string value' }
 */

app.get("/api/students", controller.getStudents);
app.get("/api/students/:id", controller.getStudent);
app.post("/api/students", controller.addStudent);
app.delete("/api/students/:id", controller.deleteStudent);
app.put("/api/students/:id", controller.updateStudent);

/**
 * app.listen tells express to always be listening
 * on the port passed in as the first argument.
 * The second argument is a callback function that
 * runs once the server is listening. It often has a
 * simple message indicating the port that is being
 * listened to.
 */

app.listen(5050, () => {
  console.log("Listening on 5050");
});
