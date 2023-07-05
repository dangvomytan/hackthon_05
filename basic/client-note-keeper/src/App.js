import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ListNote from './components/ListNote';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [listNote, setListNote] = useState([]);
  useEffect(() => {
  
    axios.get('http://localhost:8080/')
      .then((response) => {
        setListNote(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  console.log(listNote);
  return (
<>
    <Header></Header>
    <Form></Form>
    <ListNote listNote={listNote}></ListNote>
</>
  );
}

export default App;
