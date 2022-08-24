import React from "react";
import CocurricularItemCard from "./CocurricularItemCard";

function CocurricularListCard({ cocurricularList }) {
  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-md">
      {cocurricularList.map((item) => {
        return (
          <CocurricularItemCard
            cocurricularName={item.cocurricularName}
            cocurricularDesc={item.cocurricularDesc}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default CocurricularListCard;
