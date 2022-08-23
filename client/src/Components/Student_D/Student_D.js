import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bottomobnav from "../Dashboard_Components/Navigation/bottomobnav";
import Dashtopnav from "../Dashboard_Components/Navigation/dashtopnav";
import Sidebar from "../Dashboard_Components/Navigation/Sidebar";
import Pathcard from "../Dashboard_Components/Cards/Pathcard";
import Areachart from "../Dashboard_Components/Charts/Areachart";
import Barchart from "../Dashboard_Components/Charts/Barchart";
import Linechart from "../Dashboard_Components/Charts/Linechart";
import Piechart from "../Dashboard_Components/Charts/Piechart";
import AuthWrapper from "../LogIn/AuthWrapper";
import { UilEstate, UilBookOpen, UilAward } from "@iconscout/react-unicons";
import AddCocurriculumForm from "../Dashboard_Components/Forms/AddCocurriculumForm";
import { getCocurrData } from "../../api/cocurrReq";
import { useQuery } from "react-query";
import { deleteCocurr } from "../../api/cocurrReq";
import { useWindowSize } from "../../utils/useWindowSise";

const Student_Home = () => {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-center text-3xl">THIS IS HOME PAGE</h1>
      <div className="flex w-full">
        <div className="w-2/5 max-w-sm">
          <Pathcard completion={20} title={"Academic Path"} />
        </div>
        <div className="flex w-4/5 justify-center">
          {/* <Areachart
            labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
            dataset={[
              [50, 60, 70, 50, 60],
              
            ]}
            datasetLabels={["PT-1"]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)"],
              
            ]}
          /> */}
          {/* <Barchart
            labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
            dataset={[
              [50, 60, 70, 50, 60],
              [20, 30, 40, 50, 70],
            ]}
            datasetLabels={["PT-1", "PT-2"]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)"],
              ["#b0d980", "#83de14"],
            ]}
          /> */}
          {/* <Linechart
            labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
            dataset={[
              [50, 60, 70, 50, 60],
              [20, 30, 40, 50, 70],
            ]}
            datasetLabels={["PT-1", "PT-2"]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)"],
              ["#b0d980", "#84c82e"],
            ]}
          /> */}
          <Piechart
            labels={["Games", "Dance", "Art", "WE"]}
            dataset={[[20, 40, 10, 30]]}
            colors={[
              ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
            ]}
          />
        </div>
      </div>
    </div>
  )
}

const Student_LearnPath = () => {
  return (
    <div className="w-full overflow-y-auto">
      <h1 className="w-full text-center text-3xl">THIS IS LEARNING PATHS PAGE</h1>
    </div>
  )
}

const Student_CocurrCard = ({ data, delCocurr }) => {
  return (
    <div className="flex w-full max-w-xl flex-col mx-auto my-10 rounded-xl shadow-lg">
      <h1><b>Name:</b> {data.name}</h1>
      <h1><b>Description:</b> </h1>
      <p>{data.description}</p>
      <button onClick={() => { delCocurr(data.name, data.studentId) } }>Delete</button>
    </div>
  )
}

const Student_Cocurricular = ({ studentId }) => {
  // console.log('In student cocurricular');
  // console.log(studentId);
  const cocurrQuery = useQuery(['cocurr', studentId], () => getCocurrData(studentId));
  const delCocurr = async (name, studentId) => {
    const resData = await deleteCocurr({ 
      name: name, 
      studentId: studentId
    });
    if(resData.error) 
    {
      window.alert(resData.error);
    }
    else
    {
      window.alert('Cocurricular Activity Deleted!')
    }
  }
  return (
    <div className="w-full overflow-y-auto flex-col justify-center items-center">
      <h1 className="w-full text-center text-3xl">THIS IS CO CURRICULAR PAGE</h1>
      <AddCocurriculumForm studentId={studentId} />
      {
        cocurrQuery.isFetching ?
        <h1 className="w-full text-center text-3xl">LOADING... </h1>
        :
        <>
        <h1 className="flex w-full max-w-xl flex-col mx-auto my-10">
          <b>Number of cocurricular activities: {cocurrQuery.data.total}</b>
        </h1>
        {
          cocurrQuery.data.data.map((cocurr, idx) => {
            return (
              <Student_CocurrCard key={idx} data={cocurr} delCocurr={delCocurr} />
            )
          })
        }
        </>
      }
    </div>
  )
}

const Student_D_Inner = ({ currUser }) => {
  const studentMenuList = [
    {
      id: 1,
      title: "Home",
      icon: <UilEstate />,
      iconclass: "uil uil-estate"
    },
    {
      id: 2,
      title: "LearningPaths",
      icon: <UilBookOpen />,
      iconclass: "uil uil-book-open"
    },
    {
      id: 3,
      title: "CoCurriculars",
      icon: <UilAward />,
      iconclass: "uil uil-award"
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
            menuList={studentMenuList} 
            username={currUser.userInfo.name} 
            userType={currUser.userType} 
            selected={selected}
            setSelected={setSelected}
          />
          :
          <Dashtopnav />
        }
        {
          (selected === 1) && <Student_Home />
        }
        {
          (selected===2) && <Student_LearnPath />
        }
        {
          (selected===3) && <Student_Cocurricular studentId={currUser._id} />
        }
        {
          size.width >=600 ?
          <></>
          :
          <Bottomobnav menuList={studentMenuList} menuOption={selected} setMenuOption={setSelected} />
        }
    </div>
  );
}

const Student_D = () => {
  return (
    <AuthWrapper>
      <Student_D_Inner />
    </AuthWrapper>
  )
}

export default Student_D;
