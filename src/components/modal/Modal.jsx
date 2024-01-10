import { useReducer } from 'react';
import './modal.css';
import { Sesion } from '../sesion/sesion';

import { createPortal } from 'react-dom';
import Carrito from '../../stores/carrito';

function Modal(props) {

  const [state, dispatch] = useReducer(Carrito, {})


  return createPortal(
    <section className='modal' onClick={() => props.close()}>
      <section>
      <Sesion />
      </section>
    </section>,
    document.getElementById("portal")
  )
}


export default Modal;