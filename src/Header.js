import './Header.css'
import DinRec from './images/DinRec.png';

function Header() {
    return (
        <div>
            <header>
                <a>
                    <img src= { DinRec } alt="DinRec" className='dinrec'></img>
                </a>  
                <div className='navegador'>
                    <nav className='navbar'>
                        <a href='./inicio.js'>Inicio</a>
                        <a href='./blog'>Blog</a>
                        <a href='./transferencia'>Transferencia</a>
                        <a href='./contactanos'>Contactanos</a>
                        <a href='./encuentranos'>Encuentranos</a>
                    </nav>
                </div>
                <button className='login' href='./Login'>Login</button>
                <button className='signup'>Sign Up</button>
            </header>
        </div>
    )
}

export { Header };