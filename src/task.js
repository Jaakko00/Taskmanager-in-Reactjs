import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Trash, Check2, ArrowDown, ArrowUp } from "react-bootstrap-icons";

function Task({ deleteTask, moveTaskDown, moveTaskUp, id, desc, tag, complete }) {
  const [task, setTask] = useState({
    id: id,
    desc: desc,
    tag: tag,
    complete: complete,
  });

  const [isEditingDesc, setisEditingDesc] = useState(true);

  const [isEditingTag, setisEditingTag] = useState(false);

  /*
  editDesc turns the description into a form which lets you edit it
  */
  const editDesc = () => {
    return (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="desc"
          value={task.desc}
          placeholder="Description"
          onChange={(e) => {
            e.target.value.length < 20
              ? setTask({ ...task, desc: e.target.value })
              : console.log("");
          }}
        />
      </Form.Group>
    );
  };

  /*
  editTag turns the tag into a form which lets you edit it
  */
  const editTag = () => {
    return (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="tag"
          value={task.tag}
          placeholder="tag"
          onChange={(e) => {
            e.target.value.length < 12
              ? setTask({ ...task, tag: e.target.value })
              : console.log("");
          }}
        />
      </Form.Group>
    );
  };

  return (
    <>
      
        <Card className="m-2" border="primary" style={{ width: "18rem" }}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>
              {isEditingDesc && editDesc()}
              {/*Checks the state of isEditingDesc, and if state = true, then the edit form will be rendered*/}
              <Button
                variant={isEditingDesc ? "primary" : "outline-dark"}
                size={isEditingDesc ? "sm" : "lg"}
                onClick={() => setisEditingDesc(!isEditingDesc)}
              >
                {isEditingDesc && "Save"}
                {!isEditingDesc && task.desc.length > 0 && task.desc}
                {!isEditingDesc && task.desc.length === 0 && "Add desc"}
              </Button>
            </Card.Title>

            <Card.Title>
              {isEditingTag && editTag()}{" "}
              {/*Checks the state of isEditingTag, and if state = true, then the edit form will be rendered*/}
              <Button
                variant={isEditingTag ? "primary" : "light"}
                size="sm"
                onClick={() => setisEditingTag(!isEditingTag)}
              >
                {isEditingTag && "Save"}
                {!isEditingTag && task.tag.length > 0 && task.tag}
                {!isEditingTag && task.tag.length === 0 && "Add tag"}
              </Button>
            </Card.Title>

            <Button
              variant="outline-danger"
              onClick={() => {
                deleteTask(task);
              }}
            >
              <Trash />
            </Button>
            <Button
              variant={task.complete ? "success" : "outline-success"}
              onClick={() => setTask({ ...task, complete: !task.complete })}
            >
              {task.complete && <Check2 />}
              {!task.complete && <Check2 />}
            </Button>
            <Button variant="outline-info" onClick={() => moveTaskDown(task)}>
              <ArrowDown />
            </Button>
            <Button variant="outline-info" onClick={() => moveTaskUp(task)}>
              <ArrowUp />
            </Button>
          </Card.Body>
        </Card>
      
    </>
  );
}

export default Task;
