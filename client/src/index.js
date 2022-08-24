import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home/Home";
import Login from "./Components/LogIn/Login";
import Student_D from "./Components/Student_D/Student_D";
import Teacher_D from "./Components/Teacher_D/Teacher_D";
import School_D from "./Components/School_D/School_D";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentCard from "./Components/Dashboard_Components/Cards/StudentCard";
import AddAcademicPathForm from "./Components/Dashboard_Components/Forms/AddAcademicPathForm";
import Modulecard from "./Components/Dashboard_Components/Cards/Modulecard";
import Pathcard from "./Components/Dashboard_Components/Cards/Pathcard";
import StudentSearchCard from "./Components/Dashboard_Components/Cards/StudentSearchCard";
import AddCocurriculumForm from "./Components/Dashboard_Components/Forms/AddCocurriculumForm";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./config/queryClient";
import CocurricularListCard from "./Components/Dashboard_Components/Cards/CocurricularListCard";
import AddStudentForm from "./Components/Dashboard_Components/Forms/AddStudentForm";
import AddTeacherForm from "./Components/Dashboard_Components/Forms/AddTeacherForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const wrapper = (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Student_D" element={<Student_D />} />
        <Route path="/Teacher_D" element={<Teacher_D />} />
        <Route path="/School_D" element={<School_D />} />
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
              <AddAcademicPathForm />
              <AddCocurriculumForm />
              <StudentSearchCard
                studentList={[
                  {
                    id: 1,
                    name: "Inna",
                    grade: 2,
                    section: "A",
                  },
                  {
                    id: 2,
                    name: "Minna",
                    grade: 7,
                    section: "A",
                  },
                  {
                    id: 3,
                    name: "subhra",
                    grade: 7,
                    section: "A",
                  },
                ]}
              />
              <CocurricularListCard
                cocurricularList={[
                  {
                    id: 1,
                    cocurricularName: "Dummy Title",
                    cocurricularDesc:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  },
                  {
                    id: 2,
                    cocurricularName: "Dummy Title2",
                    cocurricularDesc:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  },
                ]}
              />
              <AddStudentForm />
              <AddTeacherForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

root.render(wrapper);

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
