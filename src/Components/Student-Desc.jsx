import React from "react";
import "./studentdesc.css";
import { useNavigate } from "react-router-dom";
function StudentDesc() {
  const navigation = useNavigate();
  return (
    <>
      <div className="std-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Course" />
        <input type="text" placeholder="Batch" />
      </div>
      <div className="std-btn">
        <button onClick={() => navigation("/Student")}>Cancel</button>
        <button>Submit</button>
      </div>
    </>
  );
}

export default StudentDesc;
