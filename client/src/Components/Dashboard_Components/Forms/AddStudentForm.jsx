import React from "react";
import { useState } from "react";

function AddStudentForm() {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = (e) => {
    if (name === "") window.alert("Please enter student name");
    else if (section === "") window.alert("Please enter student section");
    else if (grade === "") window.alert("Please enter student grade");
    else if (email === "") window.alert("Please enter student email");
    else if (roll === "") window.alert("Please enter student roll");
    else {
      setIsLoading(true);

      console.log({
        Name: name,
        Section: section,
        Grade: grade,
        Email: email,
        Roll: roll,
      });

      setName("");
      setSection("");
      setGrade("");
      setEmail("");
      setRoll("");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return (
    <div className="m-10 mx-auto flex w-full max-w-xl flex-col p-10 shadow-md md:rounded-3xl">
      {isLoading ? (
        <h1 className="w-full text-center text-xl">LOADING...</h1>
      ) : (
        <>
          <label htmlFor="studentName" className="p-1 text-xl font-semibold">
            Student Name:{" "}
          </label>
          <input
            type="text"
            name="studentName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label htmlFor="studentGrade" className="p-1 text-xl font-semibold">
            Student Grade:{" "}
          </label>
          <input
            type="number"
            name="studentGrade"
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label htmlFor="studentSection" className="p-1 text-xl font-semibold">
            Student Section:{" "}
          </label>
          <input
            type="text"
            name="studentSection"
            value={section}
            onChange={(e) => {
              setSection(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label htmlFor="studentRoll" className="p-1 text-xl font-semibold">
            Student Roll:{" "}
          </label>
          <input
            type="number"
            name="studentRoll"
            value={roll}
            onChange={(e) => {
              setRoll(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label htmlFor="studentEmail" className="p-1 text-xl font-semibold">
            Student Email:{" "}
          </label>
          <input
            type="text"
            name="studentEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <button
            onClick={(e) => {
              submit(e);
            }}
            className="m-1 mt-3 cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default AddStudentForm;
