import React from "react";

const CourseCard = ({ id, title, icon }) => {
  return (
    <div
      className=" flex flex-col items-center gap-3 border-2 text-center p-5 cursor-pointer"
      key={id}
    >
      <div className=" flex justify-center items-center w-20 h-20 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        {icon}
      </div>
      <h3 className=" font-bold text-lg">{title}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        perferendis corporis nihil hic quis molestiae?
      </p>
    </div>
  );
};

export default CourseCard;
