import './Footer.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <footer>
            <ul className='footer__menu'>
                <li className='footer__item'>
                    <FaFacebook/>
                </li>
                <li className='footer__item'>
                    <FaInstagram/>
                </li>
                <li className='footer__item'>
                    <FaLinkedin/>
                </li>
            </ul>
            <p><span className='footer__span'>Costs</span> &copy; 2022 </p>
        </footer>
    )
}

export default Footer