import React from "react";
import "./WhatIDo.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useEffect, useState } from "react";
import { getWhatIDo } from "../../service/api";
const WhatIDo = () => {
  const [whatido, setWhatIDo] = useState([]);
  useEffect(() => {
   getAllWhatIDo();
  }, []);
  const getAllWhatIDo = async () => {
    let response = await getWhatIDo();
    setWhatIDo(response.data);
}
  return (
    <div className=" whatidoContainer" >
      <h6 className="text-center">
        WhAT I DO
      </h6>
      <h4 className="text-center" style={{color:'blue'}} >SPEACIALIZING IN</h4>

      <CardGroup className="speacializeSkillContainer">
       
          {whatido.map((data) => (
            <Card className="p-2 bg-transparent border-none" key={data._id}>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
               {data.description}
              </Card.Text>
            </Card.Body>
            </Card>
          ))}
      
      </CardGroup>
    </div>
  );
};

export default WhatIDo;
