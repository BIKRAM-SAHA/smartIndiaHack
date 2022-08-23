import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import StudentCard from "./StudentCard";

function StudentSearchCard({ studentList = [] }) {
  const [searchText, setSearchText] = useState("");
  const displayedStudent = studentList.filter((student) => {
    return student.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="max-w-lg rounded-md bg-gray-200 p-3">
      <div className="flex">
        <UilSearch className="m-1" />
        <input
          type="text"
          name="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          className="w-full border border-gray-900"
        />
      </div>

      <div className="h-full w-full overflow-y-auto">
        {displayedStudent.map((student) => {
          return (
            <div
              className="flex w-full cursor-pointer justify-center hover:bg-gray-300"
              key={student.id}
            >
              <StudentCard
                name={student.name}
                school={student.school}
                grade={student.grade}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentSearchCard;

// example call
{
  /* <StudentSearchCard
            studentList={[
              { id: 1, name: "Inna", school: "Heritage", grade: 2 },
              { id: 2, name: "Minna", school: "Heritage", grade: 7 },
            ]}
          /> */
}
