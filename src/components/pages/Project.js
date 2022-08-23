import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import "./Project.css";
import LinkButton from "../layout/LinkButton";
import ProjectCards from "../project/ProjectCards";
import { useEffect, useState } from "react";

function Project() {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="column container min-height project__container">
      <h1>Meus Projetos</h1>
      <div className="title__container ">
        {message && <Message msg={message} type="sucess" />}

        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCards
              id={project.id}
              budget={project.budget}
              name={project.name}
              category={project?.category?.name}
              key={project.id}
            />
          ))}
        <div className="widthBtn">
          <LinkButton to="/newproject" text="Criar Projeto" />
        </div>
      </div>
    </div>
  );
}

export default Project;
