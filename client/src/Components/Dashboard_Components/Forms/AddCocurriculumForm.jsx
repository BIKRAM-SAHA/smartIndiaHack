import React, { useRef } from "react";

function AddCocurriculumForm() {
  const cocurricularNameRef = useRef();
  const cocurricularDescRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    const finalData = {
      cocurricularName: cocurricularNameRef.current.value,
      cocurricularDesc: cocurricularDescRef.current.value,
    };
    console.log(finalData);
  };
  return (
    <div className="flex w-full max-w-xl flex-col">
      <label htmlFor="PathName">Name: </label>
      <input
        type="text"
        name="CocurricularName"
        ref={cocurricularNameRef}
        className="border border-gray-400"
      />
      <label htmlFor="cocurriculumDesc">Description: </label>
      <textarea
        type="textbox"
        cols="40"
        rows="5"
        name="cocurricularDesc"
        ref={cocurricularDescRef}
        className="resize-vertical border border-gray-400"
      />
      <button
        onClick={(e) => {
          submit(e);
        }}
        className="m-2 cursor-pointer bg-gray-300 p-2"
      >
        Submit
      </button>
    </div>
  );
}

export default AddCocurriculumForm;
