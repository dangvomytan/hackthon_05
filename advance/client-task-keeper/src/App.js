import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";

function App() {
  const [value, setValue] = useState();
  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);

    // add
    const newTask = {
      content: value.content,
      due_date: value.due_date,
      status: Number(value.status),
      assigned: value.assigned,
    };
    console.log(newTask);
    axios
      .post("http://localhost:8080/task", newTask)
      .then(() => {
        handleGetTaskList();
        //  thành công
      })
      .catch((error) => {
        // lỗi API
        console.error(error);
      });
  };
  // console.log(value);

  const [tasklist, setTaskList] = useState([]);
  const handleGetTaskList = async () => {
    const response = await axios.get("http://localhost:8080/task");
    // console.log(response);
    setTaskList(response.data);
  };

  useEffect(() => {
    handleGetTaskList();
  }, []);

  // console.log(tasklist);
  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
    const handleDelTaskList = (id) => {
      axios.delete(`http://localhost:8080/task/${id}`).then(() => {
        handleGetTaskList();
      });
    };
    handleDelTaskList(id);
    // console.log(tasklist);
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Label visuallyHidden>Content</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  placeholder="Enter content"
                  name="content"
                  onChange={handleOnchange}
                />
              </InputGroup>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label visuallyHidden>Date</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="date"
                  name="due_date"
                  onChange={handleOnchange}
                />
              </InputGroup>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label visuallyHidden></Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Select
                  aria-label="Default select example"
                  name="status"
                  onChange={handleOnchange}
                >
                  <option value="1">Pending</option>
                  <option value="2">Done</option>
                </Form.Select>
              </InputGroup>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label visuallyHidden>Assigned to</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  placeholder=" Assigned to "
                  name="assigned"
                  onChange={handleOnchange}
                />
              </InputGroup>
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
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
                    <button
                      type="button"
                      onClick={() => handleEdit(item.id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
