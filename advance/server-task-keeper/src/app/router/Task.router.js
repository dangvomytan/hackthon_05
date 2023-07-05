const express = require("express");
const route = express.Router();
const taskController = require("../controllers/Task.controller");

// controllers
route.get("/", taskController.getAll);

route.get("/:id", taskController.getById);

route.post("/", taskController.addTask);

route.patch("/:id", taskController.editTask);

route.delete("/:id", taskController.deleteTask);
module.exports = route;