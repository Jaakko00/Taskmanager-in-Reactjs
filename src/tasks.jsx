import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Task from "./task";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { PlusCircle } from "react-bootstrap-icons";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [TagList, setTagList] = useState([
    "important",
    "school",
    "work"
  ]);

  const [filteredTagList, setFilteredTagList] = useState(["important", "school"]);

  /*
  filterTags checks if any tags have been selected, 
  then it puts all the nonfiltered tasks into an empty array and returns that
  */
  const filterTags = () => {
    let tempArr = Array.from(tasks);
    console.log(tasks);

    let filteredArr;

    if (filteredTagList.length > 0) {
      for (let i = 0; i < filteredTagList.length; i++) {
        filteredArr = tempArr.filter((task) => task.tag === filteredTagList[i]);

        console.log(filteredTagList[i]);
        console.log(filteredArr);
      }
    }

    console.log(filteredArr);
    return filteredArr;
  };

  /*
  taskTags was supposed to get all the tags from the tasks and make an array with all unique tags
  DOESNT WORK
  */
  const taskTags = () => {
    const arrUniq = [...new Map(tasks.map((v) => [v.tag, v])).values()];
    console.log(arrUniq);
    return arrUniq;
  };

  /*
  deleteTask filters the selected tasks out and returns a new array without the task
  */
  const deleteTask = (task) => {
    const result = tasks.filter((toDelete) => toDelete.id !== task.id);
    setTasks(result);
  };

  /*
  moveTask functions make a new array out of the tasks array, 
  and then switches the places of the task you are trying to move and the one above/under it
  */
  const moveTaskDown = (task) => {
    const index = tasks.findIndex((x) => x.id === task.id);

    let newOrder = Array.from(tasks);

    var element = newOrder[index];

    newOrder.splice(index, 1);

    newOrder.splice(index + 1, 0, element);

    setTasks(newOrder);
  };

  const moveTaskUp = (task) => {
    const index = tasks.findIndex((x) => x.id === task.id);

    if (index > 0) {
      let newOrder = Array.from(tasks);

      var element = newOrder[index];

      newOrder.splice(index, 1);

      newOrder.splice(index - 1, 0, element);

      setTasks(newOrder);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Sort by" id="navbarScrollingDropdown">
                <NavDropdown.Item>Due-date</NavDropdown.Item>
                <NavDropdown.Item>Last-modified</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Form.Check type="checkbox" label="Show completed" />
              </Nav.Link>
              <NavDropdown title="Tags" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Form.Check type="checkbox" label="important" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Form.Check type="checkbox" label="school" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1 className=" display-3 mt-1 text-center">Task manager</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <button
              className="btn btn-primary"
              onClick={() =>
                setTasks([
                  {
                    id: Date.now(),
                    desc: "",
                    tag: "",
                    complete: false,
                  },
                  ...tasks,
                ])
              }
            >
              {"New task "}
              <PlusCircle />
            </button>
          </div>
          <div className="row">
            {tasks.map((task) => (
              <Task
                deleteTask={deleteTask}
                moveTaskDown={moveTaskDown}
                moveTaskUp={moveTaskUp}
                id={task.id}
                desc={task.desc}
                tag={task.tag}
                complete={task.complete}
                key={task.id}
              />
            ))}

            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
