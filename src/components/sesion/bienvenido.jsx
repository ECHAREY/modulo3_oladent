export function Bienvenido(usuario, setUsuario) {
    
    const handleLogout = () => {
        setUsuario([])
    }

    return (
        <div>
            <h1>Bienvenido</h1>
            <h2>{usuario}</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}