import React from "react";
import "./LatestProject.css";
import Card from "react-bootstrap/Card";
import { useEffect ,useState} from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { getProject } from "../../service/api";
const LatestProject = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    getAllProject();
  },[]);
  const getAllProject = async () => {
    let response = await getProject();
    setProject(response.data);
}
  return (
    <div className="latestProjectContainer">
      <h6 className="text-center">
        PORTFOLIO
      </h6>
      <h4 className="text-center" style={{ color: 'blue' }}>LATEST PROJECTS</h4>
      <CardGroup className="latestProjectCardGroup">
        {project.map((item,key)=>{
          return <Card className=" p-2 bg-transparent m-2" key={key}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL+`/photos/${item.image}`}  />
          <Card.Body>
            <Card.Text>{item.name}</Card.Text>
            <Button variant="outline-primary" className="buttons" onClick={()=>{
              window.open(item.link)
            }}>View Demo</Button>{' '}
          </Card.Body>
     
        </Card>
       
        })}
        
       
      </CardGroup>
    </div>
  );
};

export default LatestProject;
