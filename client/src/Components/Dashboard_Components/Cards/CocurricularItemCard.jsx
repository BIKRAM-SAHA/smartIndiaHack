import React, { useState } from "react";

function CocurricularItemCard({ cocurricularName, cocurricularDesc }) {
  const text = cocurricularDesc;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="m-1">
      <div className="text-2xl font-medium my-1">{cocurricularName}</div>
      <p className="text-sm">
        {isReadMore ? text.slice(0, 150) : text}
        <span
          onClick={toggleReadMore}
          className=" cursor-pointer text-alt mx-1"
        >
          {isReadMore ? "... read more" : " show less"}
        </span>
      </p>
    </div>
  );
}

export default CocurricularItemCard;
