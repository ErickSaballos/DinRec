import './Login.css'
import DinRec from './images/DinRec.png';

function Login () {
    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={ DinRec } alt="Logo" className="logo" />
                <h2>Bienvenido a DinRec</h2>
            </div>
            <div className="login-form">
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Iniciar Sesión</button>
            </div>
        </div>
    )
}

export { Login }