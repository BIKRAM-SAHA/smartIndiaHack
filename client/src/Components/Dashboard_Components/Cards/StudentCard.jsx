import React from "react";

function StudentCard({ name = "Ramesh Rastogi", grade = "21", section = "A" }) {
  return (
    <div className=" m-1 flex w-full max-w-md flex-col rounded-lg">
      <div className="flex items-center">
        <div className="flex w-full gap-4 text-xl font-medium">
          <span>{name}</span>
        </div>
        <div className="flex gap-5">
          <div className="flex w-full items-center gap-4">
            <span className="text-lg font-medium">Grade: </span>
            <span className=" font-medium text-first">{grade}</span>
          </div>
          <div className="flex w-full items-center gap-4">
            <span className="text-lg font-medium ">Section: </span>
            <span className=" font-medium text-first">{section}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
