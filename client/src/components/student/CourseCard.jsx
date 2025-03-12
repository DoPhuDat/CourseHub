import React, { useContext } from "react";
import { assets } from "../../assets/img/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { dummyEducatorData } from "../../assets/img/assets"; 

const CourseCard = ({course}) => {
  const {currency} = useContext(AppContext)
  return (
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0,0)} 
    className="border border-gray-500/30 pb-6  rounded-lg hover:shadow-md">
    <img className="w-full rounded-t-lg" src={course.courseThumbnail} alt="" />
    <div className="p-3 text-left">
      <h3 className="text-base font-semibold">{course.courseTitle}</h3>
      <p className="text-gray-500">{dummyEducatorData.name}</p>
      <div className="flex items-center space-x-2">
        <p>4.5</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (<img key = {i} src={assets.star} alt=""
          className="w-3.5 h-3.5"/>)
        )}
        </div>
        <p className="text-gray-500">22</p>
      </div>
      <p className="flex text-base font-semibold text-gray-800">
    {currency}{(course.coursePrice - (course.discount * course.coursePrice / 100)).toFixed(2)}
</p>
    </div>

  </Link>
  );
};

export default CourseCard;
