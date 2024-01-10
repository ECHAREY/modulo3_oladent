//import './Card.css';
import style from './Card.module.css';
import './Card.css';
import { useState, useRef } from 'react';

function Card(props) { // objeto const persona = { nombre: "pedro" }   persona.edad  = undefined
    console.log("me imprimi", props.isbn);

    // addEventListener("evento a escuchar", function)
// 
    //const [ conDescuento, setConDescuento ] = useState(props.descuento ? "green" : "beige");
    const [contador, setContador] = useState(0);
    let contador2 = useRef(0); // { current: 0 }
    let imagen = useRef(null);

    const handleClickButton = (nombreProducto) => {
    // const handleClickButton = (evt) => {
        //alert(`Esta a punto de agregar el siguiente producto: ${nombreProducto}`)
        //setContador(contador+1);
        contador2.current++;
        console.log("ref", contador2.current);
        console.log("imagen", imagen);
        // evt.stopPropagation()
        // evt.preventDefault()
        // console.log(evt)
    }

    return (   // !   true false
            <section style={{fontSize: "40px"}} className={`${style.container} ${props.descuento !== undefined && props.descuento ? style.descuento : style.normal}`}>
                <div className={style["container-image"]}>
                    <img ref={imagen} src={props.src} alt={props.alt} />
                </div>
                <div className={style['container-data']}>
                    <p className={style['nombre']}>{props.nombre}</p>
                    <p className={style['nombre']}>{props.isbn}</p>
                    <p className={style['price']}>${props.precio}</p>
                    <p>Unidades a comprar: {contador2.current}</p>
                </div>
                <div>
                    {/* <button onClick={() => handleClickButton(props.nombre)}>Agregar</button> */}
                    <button onClick={() => handleClickButton(props.nombre)}>Agregar</button>
                </div>
            </section>
    )
}

export default Card;