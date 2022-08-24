import React, { useRef } from "react";
import { useState } from "react";

function AddTeacherForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = (e) => {
    if (name === "") window.alert("Please enter teacher name");
    else if (email === "") window.alert("Please enter teacher email");
    else {
      setIsLoading(true);

      console.log({
        Name: name,
        Email: email,
      });

      setName("");
      setEmail("");
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
          <label htmlFor="teacherName" className="p-1 text-xl font-semibold">
            Teacher Name:{" "}
          </label>
          <input
            type="text"
            name="teacherName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label
            htmlFor="teacherEmail"
            className="mt-1 p-1 text-xl font-semibold"
          >
            Teacher Email:{" "}
          </label>
          <input
            type="text"
            name="teacherEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="m-1 rounded-lg border border-gray-400 p-1"
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

export default AddTeacherForm;
