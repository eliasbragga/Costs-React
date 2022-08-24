import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/home/Home'
import Project from '../pages/project/Project'
import NewProject from '../pages/newProject/NewProject'
import Contact from '../pages/contact/Contact'
import Company from '../pages/company/Company'
import Logo from '../../img/costs_logo.png'
import '../navBar/NavBar.css'

function NavBar() {
    return (
        <Router>
            <nav className='menu'>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
                <ul className='menu__lista'>
                    <li className='menu__link'>
                     <Link to="/">Home</Link>
                    </li>
                    <li className='menu__link'>
                     <Link to="/project">Projetos</Link>
                    </li>                    
                    <li className='menu__link'>
                     <Link to="/company">Empresa</Link>
                    </li>
                    <li className='menu__link'>
                     <Link to="/contact">Contato</Link>
                    </li>                    
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/project' element={<Project/>} ></Route>
                <Route path='/newproject' element={<NewProject/>} ></Route>
                <Route path='/contact' element={<Contact/>} ></Route>
                <Route path='/company' element={<Company/>} ></Route>         
        
            </Routes>
        </Router>
    )
}

export default NavBar