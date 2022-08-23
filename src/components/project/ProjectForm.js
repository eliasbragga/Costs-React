import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import "./ProjectForm.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project)
    console.log(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <div>
        <Input
          type="text"
          text="Nome do Projeto:"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : '' }
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orçamento do Projeto:"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChange={handleChange}
          value={project.budget  ? project.budget : ''}
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          value={project.category ? project.category.id : ""}
          options={categories}
          handleOnChange={handleCategory}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
