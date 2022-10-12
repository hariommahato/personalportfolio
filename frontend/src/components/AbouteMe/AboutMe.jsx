import React from "react";
import "./AboutMe.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getAbout } from "../../service/api";
const AboutMe = () => {
  const [aboutdata, setAboutData] = useState([]);
  useEffect(() => {
    getAllProject();


  }, []);
  const getAllProject = async () => {
    let response = await getAbout();
    setAboutData(response.data);

  };
  return (
    <CardGroup className="mainContainerAbout">
      <Card className="imgDiv"></Card>
      <Card className="descriptionHolder">
        <Card.Body>
          <Card.Title className="descriptionHolderTitle">About Me</Card.Title>
          {aboutdata.map((item, key) => (
            <Card.Text key={key}>{item.text}</Card.Text>
          ))}
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default AboutMe;

// {about.map(item => <h1 key={item._id}>{item.text}</h1>)}
// useEffect(() => {
//   axios.get("http://localhost:3002/get-about")
//     .then((res) => setAbout(res.data))
//     .catch((err) => console.log(err));
// })
