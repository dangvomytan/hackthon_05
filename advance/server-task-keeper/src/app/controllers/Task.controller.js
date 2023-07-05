const modelTask = require('../models/task.model.js');

function Task(content, due_date, status,assigned) {
  this.content =content;
  this.due_date = due_date;
  this.status = status;
  this.assigned = assigned;
}

const getAll = (req, res) => {
     const search = req.query.search;
     modelTask.modelGetAll(search,res);
};
const getById = (req, res) => {
  const id = req.params.id;
  modelTask.modelGetById(id, res);
};

const addTask = (req, res) => {
  if (!req.body) return;
  const newTask = new Task(
     req.body.content,
     req.body.due_date,
     req.body.status,
     req.body.assigned,
  );
  console.log("new Task", newTask);
  modelTask.modelAlltask(newTask,res)
};

const editTask = (req, res) => {
     const id = req.params.id;
     if (!req.body) return;
     const editTask = new Task(
       req.body.content,
       req.body.due_date,
       req.body.status,
       req.body.assigned,
     );
     modelTask.modelEdit(id,editTask,res)
};

const deleteTask = (req, res) => {
     const id = req.params.id;
     modelTask.modelDelete(id,res)
};

module.exports = {
      getAll, 
      getById, 
      addTask, 
      editTask, 
      deleteTask 
     };
