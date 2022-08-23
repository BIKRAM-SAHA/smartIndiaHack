import React, { useRef } from "react";
import { useState } from "react";
import { sendCocurrData } from "../../../api/cocurrReq";
import { queryClient } from "../../../config/queryClient";

function AddCocurriculumForm({ studentId }) {
  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addCocurricular = async () => {
    if(name === "") window.alert("Please enter name of cocurricular activity")
    else if(desc === "") window.alert("Please enter description of cocurricular activity")
    else
    {
      setIsLoading(true);
      const data = await sendCocurrData({ 
        name: name, 
        studentId: studentId, 
        description: desc 
      });
      if(data.error) 
      {
        window.alert(data.error);
      }
      setName('');
      setDesc('');
      setIsLoading(false);
      queryClient.invalidateQueries('cocurr');
    }
  }
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
    <div className="flex w-full max-w-xl flex-col mx-auto my-10">
      {
        isLoading ?
        <h1 className="w-full text-center text-xl">LOADING...</h1>
        :
        <>
          <label htmlFor="PathName">Name: </label>
          <input
            type="text"
            name="CocurricularName"
            value={name}
            className="border border-gray-400"
            onChange={(e) => { setName(e.target.value) }}
          />
          <label htmlFor="cocurriculumDesc">Description: </label>
          <textarea
            type="textbox"
            cols="40"
            rows="5"
            name="cocurricularDesc"
            value={desc}
            className="resize-vertical border border-gray-400"
            onChange={(e) => { setDesc(e.target.value) }}
          />
          <button
            onClick={addCocurricular}
            className="m-2 cursor-pointer bg-gray-300 p-2"
          >
            Submit
          </button>
        </>
      }
    </div>
  );
}

export default AddCocurriculumForm;
