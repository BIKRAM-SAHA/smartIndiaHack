import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Bottomobnav from '../Dashboard_Components/Navigation/bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'
import Sidebar from '../Dashboard_Components/Navigation/Sidebar'
import AuthWrapper from '../LogIn/AuthWrapper'
import { useWindowSize } from '../../utils/useWindowSise'
import { UilEstate, UilGraduationCap, UilPodium, UilPresentationLinesAlt } from "@iconscout/react-unicons";

const School_D_Inner = ({ currUser }) => {
  const schoolMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate"
    },
    {
      id: 2,
      title: "Students",
      icon: <UilGraduationCap />,
      iconclass: "uil uil-graduation-cap"
    },
    {
      id: 3,
      title: "Teachers",
      icon: <UilPodium />,
      iconclass: "uil uil-podium"
    },
    {
      id: 4,
      title: "Classes",
      icon: <UilPresentationLinesAlt />,
      iconclass: "uil uil-presentation-lines-alt"
    },
  ];
  const [selected, setSelected] = useState(1);
  const size = useWindowSize();
  return (
    <div className="flex">
        {/* <Dashtopnav />
          <Bottomobnav /> */}
        {
          size.width >= 600 ?
          <Sidebar 
            menuList={schoolMenuList} 
            username={currUser.userInfo.name} 
            userType={currUser.userType} 
            selected={selected}
            setSelected={setSelected}
          />
          :
          <Dashtopnav />
        }
        {
          (selected === 1) && 
          <div className="w-full overflow-y-auto">
            <h1 className="w-full text-center text-3xl">CARDS TO ADD STUDENTS TEACHERS CLASSROOMS(LEARNING PATHS) PRESENT HERE</h1>
          </div>
        }
        {
          (selected === 2) && 
          <div className="w-full overflow-y-auto">
            <h1 className="w-full text-center text-3xl">LIST OF STUDENTS WILL BE DISPLAYED HERE</h1>
          </div>
        }
        {
          (selected === 3) && 
          <div className="w-full overflow-y-auto">
            <h1 className="w-full text-center text-3xl">LIST OF TEACHERS WILL BE DISPLAYED HERE</h1>
          </div>
        }
        {
          (selected === 4) && 
          <div className="w-full overflow-y-auto">
            <h1 className="w-full text-center text-3xl">LIST OF CLASSROOMS(LEARNING PATHS) WILL BE DISPLAYED HERE</h1>
          </div>
        }
        {
          size.width >=600 ?
          <></>
          :
          <Bottomobnav menuList={schoolMenuList} menuOption={selected} setMenuOption={setSelected} />
        }
    </div>
  );
}

const School_D = () => {
  return (
    <AuthWrapper>
      <School_D_Inner />
    </AuthWrapper>
  )
}

export default School_D;