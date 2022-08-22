import React, { useState, useRef } from "react";

function AddAcademicPathForm() {
  const pathNameRef = useRef();
  const [formFields, setFormFields] = useState([{ TopicName: "" }]);
  const handleTopicChanges = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const submit = (e) => {
    e.preventDefault();
    const finalData = {
      pathName: pathNameRef.current.value,
      topics: [...formFields],
    };
    console.log(finalData);
  };
  const addFields = () => {
    let object = {
      TopicName: "",
    };
    setFormFields([...formFields, object]);
  };
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div>
      <label htmlFor="PathName">Path Name: </label>
      <input
        type="text"
        name="PathName"
        ref={pathNameRef}
        className="border border-gray-400"
      />
      <div>Topics</div>

      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <label htmlFor="TopicName">Name: </label>
            <input
              type="text"
              name="TopicName"
              onChange={(event) => {
                handleTopicChanges(event, index);
              }}
              value={form.TopicName}
              className="border border-gray-400"
            />
            <button
              onClick={() => {
                removeFields(index);
              }}
              className="m-2 cursor-pointer bg-gray-300 p-2"
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          addFields();
        }}
        className="m-2 cursor-pointer bg-gray-300 p-2"
      >
        Add More
      </button>
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

export default AddAcademicPathForm;
