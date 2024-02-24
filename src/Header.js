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
                        <a href='#'>Inicio</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Transferencia</a>
                        <a href='#'>Contactanos</a>
                        <a href='#'>Encuentranos</a>
                    </nav>
                </div>
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </header>
        </div>
    )
}

export { Header };