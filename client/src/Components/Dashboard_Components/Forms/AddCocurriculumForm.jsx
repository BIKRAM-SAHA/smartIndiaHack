import React, { useRef } from "react";
import { useState } from "react";
import { sendCocurrData } from "../../../api/cocurrReq";
import { queryClient } from "../../../config/queryClient";

function AddCocurriculumForm({ studentId }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addCocurricular = async () => {
    if (name === "") window.alert("Please enter name of cocurricular activity");
    else if (desc === "")
      window.alert("Please enter description of cocurricular activity");
    else {
      setIsLoading(true);
      const data = await sendCocurrData({
        name: name,
        studentId: studentId,
        description: desc,
      });
      if (data.error) {
        window.alert(data.error);
      }
      setName("");
      setDesc("");
      setIsLoading(false);
      queryClient.invalidateQueries("cocurr");
    }
  };
  // const cocurricularNameRef = useRef();
  // const cocurricularDescRef = useRef();
  // const submit = (e) => {
  //   e.preventDefault();
  //   const finalData = {
  //     cocurricularName: cocurricularNameRef.current.value,
  //     cocurricularDesc: cocurricularDescRef.current.value,
  //   };
  //   console.log(finalData);
  // };
  return (
    <div className="m-10 mx-auto flex w-full max-w-xl flex-col p-10 shadow-md md:rounded-3xl">
      {isLoading ? (
        <h1 className="w-full text-center text-xl">LOADING...</h1>
      ) : (
        <>
          <label htmlFor="PathName" className="p-1 text-xl font-semibold">
            Name:{" "}
          </label>
          <input
            type="text"
            name="CocurricularName"
            value={name}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label
            htmlFor="cocurriculumDesc"
            className="mt-1 p-1 text-xl font-semibold"
          >
            Description:{" "}
          </label>
          <textarea
            type="textbox"
            cols="40"
            rows="5"
            name="cocurricularDesc"
            value={desc}
            className="resize-vertical m-1 rounded-lg border border-gray-400 p-1"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            onClick={addCocurricular}
            className=" m-1 mt-3 cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default AddCocurriculumForm;
