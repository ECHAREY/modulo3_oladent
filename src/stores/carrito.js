                // { compras: [] }
function Carrito(state, accion) {
  // if (accion.type === "inicia_app") {
  //   console.log("desde reducer", accion, state)
  //   return { compras: [ ...state.compras, 1 ] }
  // }
  switch(accion.type) {
    case "agregaPelicula":
      return { ...state, compras: [...state.compras, {}] } // []  [1] [11] [111]
      break;
    case "quitaPelicula": 
      state.compras.pop();
      return { ...state, compras: [...state.compras]  }
      break;
    case "sumaPelicula":
      
      break;
    case "quitaTodasPeliculas":
      break;
    default:
      return { ...state }
  }
}

export default Carrito;