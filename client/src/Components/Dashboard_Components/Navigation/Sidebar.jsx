import React, { useState } from "react";
import { UilUserCircle, UilBars, UilMultiply, UilEstate } from "@iconscout/react-unicons";
import logofull from "../../../logofull.svg";
import logoicon from "../../../logoicon.svg";
import Navgrid from "./Navgrid";

function Sidebar({ menuList = [{
  id: 1,
  title: "Dashboard",
  icon: <UilEstate />,
},
{
  id: 2,
  title: "Students",
  submenu: true,
  submenuItems: [
    { id: 2.1, title: "Student List" },
    { id: 2.2, title: "Add Student" },
  ],
},
{
  id: 3,
  title: "Teachers",
  submenu: true,
  submenuItems: [
    { id: 3.1, title: "Teacher List" },
    { id: 3.2, title: "Add Teacher" },
  ],
},
{
  id: 4,
  title: "Classes",
  submenu: true,
  submenuItems: [
    { id: 4.1, title: "Classes List" },
    { id: 4.2, title: "Add Classes" },
  ],
},
{
  id: 5,
  title: "Coach",
  submenu: true,
  submenuItems: [
    { id: 5.1, title: "Coach List" },
    { id: 5.2, title: "Add Coach" },
  ],
},], username="Ramesh", userType="student", selected, setSelected }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-fit bg-gray-800 pl-3 ">
      <div className={`min-h-screen duration-500 ${open ? "w-60" : "w-20"} `}>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="absolute top-5 right-5 cursor-pointer rounded-md bg-gray-800 text-white">
            {open ? (
              <UilMultiply
                className="m-1 h-8 w-8"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            ) : (
              <UilBars
                className="m-1 h-8 w-8"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            )}
          </div>
          <div
            className={`flex flex-row items-center py-2 ${
              open ? "justify-start gap-4" : "justify-center"
            }`}
          >
            <img src={logoicon} className="w-12" alt="logo" />
            {open ? <span className="text-white">PRAGMATE</span> : ""}
          </div>

          <div className="rounded-2xl bg-gray-800">
            <div
              className={`flex cursor-pointer flex-row items-center py-2 ${
                open ? "justify-start gap-4" : "justify-center"
              }`}
            >
              <a href="#" className="relative block flex-shrink-0">
                {/* <img
                  alt="profil"
                  src="/images/person/1.jpg"
                  className="mx-auto h-16 w-16 rounded-full object-cover "
                /> */}
                <UilUserCircle className="h-10 w-10 text-white" />
              </a>
              {open ? (
                <div className=" flex flex-col">
                  <span className="text-md font-sm text-white">{username ? username: "Undefined"}</span>
                  <span className="text-xs text-gray-400">{userType ? userType: "Undefined"}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <Navgrid
          menuList={menuList}
          selected={selected}
          setSelected={setSelected}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}

export default Sidebar;


