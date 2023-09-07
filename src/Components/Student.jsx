import React from "react";
import "./student.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import App from "../App";
import StudentDesc from "./Student-Desc";

const Student = (props) => {
  console.log(props.stdData);
  const navigation = useNavigate();
  return (
    <>
      <div className="student-head">
        <h1>Student Details</h1>
        <button
          className="add-std-btn"
          onClick={() => {
            navigation("/Student-Desc");
          }}
        >
          Add new Student
        </button>
      </div>
      <div className="std-form">
        <table>
          <tr>
            <th className="name">Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>

          {props.stdData.map((item, i) => {
            return (
              <tr>
                <td className="name">{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>

                <td>{<Link to="/Student-Desc">Edit</Link>}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Student;
