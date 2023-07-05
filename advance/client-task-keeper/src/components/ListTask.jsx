import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const ListTask = () => {
  const [tasklist, setTaskList] = useState([]);
  const handleGetTaskList = async () => {
    const response = await axios.get('http://localhost:8080/task')
    // console.log(response);
    setTaskList(response.data);
  }

  useEffect(() => {
    handleGetTaskList();
  }, []);

  // console.log(tasklist);
  const handleEdit = (id) => {
    console.log(id);

  }
  const handleDelete = (id) => {
    console.log(id);
    const handleDelTaskList = (id) => {
      axios.delete(`http://localhost:8080/task/${id}`).then(() => {    handleGetTaskList();});
    }
    handleDelTaskList(id);
    // console.log(tasklist);
  }
  return (
    <>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Content</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Assigned to</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasklist.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.content}</td>
                  <td>{item.due_date}</td>
                  <td>{item.status == 1 ? "pending" : "done"}</td>
                  <td>{item.assigned}</td>
                  <td>
                    <button type="button" onClick={() => handleEdit(item.id)} className="btn btn-primary">
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-danger">
                      delete
                    </button>
                  </td>
                </tr>
              )

            })}
          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default ListTask