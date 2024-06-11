import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import CourseCard from "./CourseCard";

const Course = () => {
  const courseData = [
    {
      id: 1,
      title: "Experience Mentor",
      icon: <FaBookOpen className=" text-primary" size={30} />,
    },
    {
      id: 2,
      title: "Friendly Price",
      icon: <FaGraduationCap className=" text-primary" size={36} />,
    },
    {
      id: 3,
      title: "Quality Learning",
      icon: <PiMedalFill className=" text-primary" size={36} />,
    },
  ];
  return (
    <section className=" container flex flex-col items-center justify-center">
      {/* content section  */}
      <div className="pt-10 w-full md:w-2/4 text-center">
        <h1 className=" text-4xl font-bold py-4 text-primary">
          The Way You Join Our Courses
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a quo
          quis ipsam explicabo voluptatum exercitationem amet rem unde
          provident!
        </p>
      </div>

      {/* cards section  */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courseData.map((item) => {
          return (
            <CourseCard key={item.id} title={item.title} icon={item.icon} />
          );
        })}
      </div>
    </section>
  );
};

export default Course;
