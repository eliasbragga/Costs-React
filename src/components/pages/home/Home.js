import '../Pages.css'
import './Home.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/linkButton/LinkButton'


function Home(){
    return(
        <section className='container home__container '>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img className='home__image' src={savings} alt="costs" />
        </section>
    )
}

export default Home