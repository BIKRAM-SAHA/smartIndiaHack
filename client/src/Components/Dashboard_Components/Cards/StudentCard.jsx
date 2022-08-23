import React from "react";
import { UilUserCircle } from "@iconscout/react-unicons";

function StudentCard({
  name = "Ramesh Rastogi",
  school = "AISSS",
  grade = "21",
  profilePicLink,
}) {
  return (
    <div className=" m-1 flex w-full max-w-md flex-col rounded-lg shadow-sm">
      <div className="mx-auto">
        <div className="flex w-full gap-4 text-2xl">
          {profilePicLink ? (
            <img
              alt="profile"
              src="/images/person/1.jpg"
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <UilUserCircle className="h-10 w-10 text-black" />
          )}
          <span>{name}</span>
        </div>
        <div className="flex w-full gap-4">
          <span className="text-lg font-medium">School: </span>
          <span>{school}</span>
        </div>
        <div className="flex w-full gap-4">
          <span className="text-lg font-medium">Grade: </span>
          <span>{grade}</span>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <span className="cursor-pointer">Learn More `&gt;`</span>
      </div>
    </div>
  );
}

export default StudentCard;
