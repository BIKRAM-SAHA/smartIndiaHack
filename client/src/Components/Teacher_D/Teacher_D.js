import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Bottomobnav from '../Dashboard_Components/Navigation/bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'
import AuthWrapper from '../LogIn/AuthWrapper'
import Sidebar from '../Dashboard_Components/Navigation/Sidebar'
import { UilEstate } from "@iconscout/react-unicons";
import { useWindowSize } from '../../utils/useWindowSise'

const Teacher_D_Inner = ({ currUser }) =>  {
  const teacherMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate"
    }
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
            menuList={teacherMenuList} 
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
            <h1 className="w-full text-center text-3xl">LIST OF STUDENTS WILL BE DISPLAYED HERE</h1>
          </div>
        }
        {
          size.width >=600 ?
          <></>
          :
          <Bottomobnav menuList={teacherMenuList} menuOption={selected} setMenuOption={setSelected} />
        }
    </div>
  );
}

const Teacher_D = () => {
  return (
    <AuthWrapper>
      <Teacher_D_Inner />
    </AuthWrapper>
  )
}

export default Teacher_D