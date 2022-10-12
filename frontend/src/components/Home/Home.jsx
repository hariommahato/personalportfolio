import React ,{useEffect} from "react";
import AboutMe from "../AbouteMe/AboutMe";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import LatestProject from "../LatestProject/LatestProject";
import WhatIDo from "../WhatIDo/WhatIDo";
// import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = () => {
  // const navigate = useNavigate();
    
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <>
      <div className="Home ">
        <div className="overtext ">
          <h6 style={{ color: "blue" }}>I'm Hariom Mahato</h6>
          <h6 style={{ color: "blue" }}>FullStack Developer</h6>
          <div className="socialMediaIcons">
            <BsFacebook style={{ color: "blue" }} />
            <BsGithub style={{ color: "blue" }} />
            <BsInstagram style={{ color: "blue" }} />
          </div>
        </div>
      </div>

      <AboutMe />
      <WhatIDo />
      <LatestProject />
    </>
  );
};

export default Home;
