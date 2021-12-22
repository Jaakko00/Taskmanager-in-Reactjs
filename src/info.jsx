import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigationbar from "./navbar";

export default function Info() {
  return (
    <main>
      <Navigationbar />
      <h1 className=" display-6 mt-5 text-center">
        A Task-managing Application made by Jaakko Saranpää using{" "}
        <code>
          <a target="_blank" rel="noreferrer" href="https://reactjs.org">
            ReactJS
          </a>
        </code>
      </h1>
      <p className="lead text-center mt-4">
        Other technologies used building this application include:
      </p>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">React Router</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">React-Bootstrap</li>
        <li className="list-group-item">Bootstrap-Icons</li>
      </ul>
      <p className="lead text-center mt-4">
        This application should be self-explanatory and shouldn't need any
        instructions
      </p>
      <p className="lead text-center mt-4">
        Features that have yet to be implemented:
      </p>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">Tag filtering</li>
        <li className="list-group-item">Filtering by completion</li>
        <li className="list-group-item">Task searching</li>
        <li className="list-group-item">
          Task list sorting by due-date and last-modified
        </li>
      </ul>
    </main>
  );
}
