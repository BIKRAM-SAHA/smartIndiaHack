import React from "react";
import { Link } from "react-router-dom";
import Bottomobnav from "../Dashboard_Components/Navigation/bottomobnav";
import Dashtopnav from "../Dashboard_Components/Navigation/dashtopnav";
import Sidebar from "../Dashboard_Components/Navigation/Sidebar";
import Pathcard from "../Dashboard_Components/Cards/Pathcard";
import Areachart from "../Dashboard_Components/Charts/Areachart";
import Barchart from "../Dashboard_Components/Charts/Barchart";
import Linechart from "../Dashboard_Components/Charts/Linechart";
import Piechart from "../Dashboard_Components/Charts/Piechart";

function Student_D() {
  return (
    <div className="flex">
      {/* <Dashtopnav />
        <Bottomobnav /> */}
      <Sidebar />
      <div className="w-full overflow-y-auto">
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
    </div>
  );
}

export default Student_D;
