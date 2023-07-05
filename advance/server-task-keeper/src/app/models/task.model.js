const sql = require('../../libs/database/db.connect');

const modelAlltask=(newTask,res)=>{
   const insertDara = `INSERT INTO tbl_task SET ?`;
  sql.query(insertDara, newTask, (err, result) => {
    if (err) {
      res.statu(500).json({ message: "loi server" });
      return;
    }
    console.log("tao moi thag cong data:", { ...result });
    res.status(200).json({ message: "them moi thanh cong" });
  });  
}

const modelGetAll=(search,res)=>{
     let sqlString = "SELECT * FROM tbl_task"
     if(search)
     {
          sqlString = sqlString + ` WHERE nameTask LIKE "%${search}%"`
     }
     sql.query(sqlString, (err, result) => {
  if (err) {
    res.status(500).json({ message: "loi server" });
    return;
  }
  res.status(200).json(result);
});
}

const modelGetById=(id,res)=>{
     let sqlString = `SELECT * FROM tbl_task WHERE id=${id}`;
     sql.query(sqlString, (err, result) => {
  if (err) {
    res.status(500).json({ message: "loi server" });
    return;
  }
  res.status(200).json(result);
});
}



const modelEdit = (id,editTask,res)=>{
     // console.log(">>>>>>>>>>>>",editTask);
     const data = [ editTask.content, editTask.due_date, editTask.status,editTask.assigned,id]
     let sqlString = "UPDATE tbl_task SET  content=?, due_date=?,status=?,assigned=? WHERE id=?";
     // console.log(">>>>>",data);
     sql.query(sqlString,data, (err, result) => {
          if (err) {
            res.status(500).json({ message: "loi server" });
            return;
          }
          console.log("update thanh cong", { ...result });
          res.status(200).json(result);
        });
     
}
const modelDelete = (id,res)=>{
     let sqlString = `DELETE FROM tbl_task WHERE id=${id}`;
     sql.query(sqlString, (err, result) => {
          if (err) {
            res.status(500).json({ message: "loi server" });
            return;
          }
          console.log("Delete thanh cong",);
          res.status(200).json({ message: "Delete thanh cong" });
        });
     
}
module.exports = {modelAlltask,modelGetAll,modelGetById,modelEdit,modelDelete};


