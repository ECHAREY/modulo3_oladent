import './sesion.css'
import { useState } from 'react'

export function Sesion (setUser) {
const [usuario, setUsuario] = useState ("")
const [contrasena, setContrasena] = useState ("")
const [error, setError] = useState(false)


const handleSubmit = (e) => {
    e.preventDefault()

    if (usuario == "" || contrasena == "") {
        setError(true)
        return
    }
    setError(false)

    setUsuario([usuario])
}

    return (
        <section>
        <h1>Iniciar sesión:</h1>
            <form 
            className='sesion'
            onSubmit={handleSubmit}>
                Usuario <input 
                type='text' 
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                />
                Contraseña <input 
                type='password' 
                value={contrasena}
                onChange={e => setContrasena(e.target.value)}
                />
                <button>iniciar sesión</button>
                <br />
            </form>
            {error && <p>Todos los campos son obligatorios.</p>}
        </section>
    )
}

//video de usuarios
/* https://www.youtube.com/watch?v=Io-WXBIpXSo */