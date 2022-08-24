import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import StudentCard from "./StudentCard";

function StudentSearchCard({ studentList = [] }) {
  const [searchText, setSearchText] = useState("");
  const displayedStudent = studentList.filter((student) => {
    return student.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="m-10 mx-auto flex w-full max-w-3xl flex-col  p-10 ">
      <div className="flex items-center justify-center">
        <UilSearch className="m-1" />
        <input
          type="text"
          name="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          className="m-1 h-8 w-3/5 rounded-lg border border-gray-400 p-1"
        />
      </div>

      <div className="h-full w-full overflow-y-auto">
        {displayedStudent.map((student) => {
          return (
            <div
              className="my-4 flex w-full cursor-pointer justify-center py-2 shadow-sm hover:bg-bgbody md:rounded-lg"
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
