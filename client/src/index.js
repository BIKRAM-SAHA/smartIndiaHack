import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home/Home";
import Login from "./Components/LogIn/Login";
import Student_D from "./Components/Student_D/Student_D";
import Teacher_D from "./Components/Teacher_D/Teacher_D";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentCard from "./Components/Dashboard_Components/Cards/StudentCard";
import AddAcademicPathForm from "./Components/Dashboard_Components/Forms/AddAcademicPathForm";
import Modulecard from "./Components/Dashboard_Components/Cards/Modulecard";
import Pathcard from "./Components/Dashboard_Components/Cards/Pathcard";
import StudentSearchCard from "./Components/Dashboard_Components/Cards/StudentSearchCard";
import AddCocurriculumForm from "./Components/Dashboard_Components/Forms/AddCocurriculumForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const wrapper = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Student_D" element={<Student_D />} />
      <Route path="/Teacher_D" element={<Teacher_D />} />
      <Route
        path="/custom"
        element={
          <div>
            <Modulecard
              topics={[
                { id: 1, title: "Internet" },
                { id: 2, title: "Internet2" },
              ]}
            />
            <div className="bg-gray-200">
              <AddAcademicPathForm />
            </div>
            <AddCocurriculumForm />
            <div className="bg-gray-200">
              <StudentSearchCard
                studentList={[
                  { id: 1, name: "Inna", school: "Heritage", grade: 2 },
                  { id: 2, name: "Minna", school: "Heritage", grade: 7 },
                  { id: 3, name: "subhra", school: "Heritage", grade: 7 },
                ]}
              />
            </div>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);

root.render(wrapper);

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
