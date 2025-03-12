import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/img/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()
  const [allCourses, setAllCourses] = useState([]);

 //fetch all courses
  useEffect(() => {
    setAllCourses(dummyCourses);
  }, []);
  const value = {
    currency, allCourses,navigate
  }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
