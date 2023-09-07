import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import StudentDesc from "./Components/Student-Desc";

function App() {
  const stdDetail = [
    {
      name: "john",
      age: 26,
      course: "MERN",
      batch: "October",
      url: "https://www.google.com/",
    },
    {
      name: "Doe",
      age: 26,
      course: "MERN",
      batch: "November",
      url: "https://www.google.com/",
    },
    {
      name: "Doe",
      age: 26,
      course: "MERN",
      batch: "September",
      url: "https://www.google.com/",
    },
    {
      name: "Biden",
      age: 26,
      course: "MERN",
      batch: "January",
      url: "https://www.google.com/",
    },
    {
      name: "Barar",
      age: 22,
      course: "MERN",
      batch: "October",
      url: "https://www.google.com/",
    },
    {
      name: "Elent",
      age: 27,
      course: "MERN",
      batch: "August",
      url: "https://www.google.com/",
    },
    {
      name: "Rogar",
      age: 22,
      course: "MERN",
      batch: "June",
      url: "",
    },
  ];
  return (
    <BrowserRouter>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/Student">Student</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Student" element={<Student stdData={stdDetail} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Student-Desc" element={<StudentDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
