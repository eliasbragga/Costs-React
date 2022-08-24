import { useNavigate } from 'react-router-dom'

import '../Pages.css'
import ProjectForm from '../../project/projectForm/ProjectForm'
import './NewProject.css'

function Project(){
    
    const navigate = useNavigate()

    function createPost(project) {

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method:"POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/project', { state: {message: 'Projeto criado com sucesso!'} })
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='column newProject__container container min-height'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default Project