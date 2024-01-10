import './App.css';
import { useState } from 'react';
import Card from "./components/card/Card";
import { Barra, OladentLogo, ContainerOption, Option, HeadMensaje } from "./components/barra/Barra"
import { BodySection, ParrafoText, OpcionesTexto, PieImg, ServiciosSection, ColumnasBody, InicioSesion, BtnBuscar, TituloH1, DatosContacto, FooterConf, InfoContacto } from "./components/body/body"
import { Fragment, useEffect, useReducer, useRef} from "react";
import movies from "./data/movies.json";
import descuentos from "./data/descuentos.json";
import Modal from './components/modal/Modal';
import Carrito from './stores/carrito';
import ImgOladent from './components/barra/oladent.png';
import PromoUno from './components/Carousel/PromoUno.gif';
import Container from 'react-bootstrap/Container';
import { Sesion } from './components/sesion/sesion';
import { Bienvenido } from './components/sesion/bienvenido';
import Carousel from 'react-bootstrap/Carousel';



function App() {

  console.log("me imprimo");

  // spread operator: permite crear o añadir información de una estructura de datos del mismo tipo a otra
  const [peliculas] = useState([...movies]); // peliculas[0] = [], peliculas[1]
  const [todosDescuentos, setTodosDescuentos] = useState([...descuentos]);
  const [textoActualizado, setTextoActualizado] = useState("")
  const [carrito, setCarrito] = useState([]); 
  const [visible, setVisible] = useState(false);
  //let carrito = useRef([]); 
  let texto = useRef(null);

  const descuento = (id) => todosDescuentos.includes(id)

  const agrega = () => {
    setCarrito([...carrito, {}])
    //carrito.current = [...carrito.current, {}];
    console.log("carrito", carrito);
  }

  const imprime = () => setTextoActualizado(texto.current.value)
  const visualiza  = () => {
    dispatch({ type: "inicia_app" })
    setVisible(!visible)
  };
  const [state, dispatch] = useReducer(Carrito, { compras: [] });

  // funciones anonimas
  // setPeliculas()

  useEffect(() => {
    console.log("solo la primera vez")
  }, []); // se ejecuta una solo vez
  useEffect(() => {
    // dispatch({ type: "inicia_app" });
    console.log("solo cuando visible cambie")
  }, [visible]); // lista de pedendendias

  useEffect(() => {
    console.log("state-reducer", state);
  }, [dispatch]);


// usuario para pasar a bienvenido
const [usuario, setUsuario] = useState([])




  return (
    <section>
      {/* Elementos del Header/Menú */}
      <Barra>
      <img src={ ImgOladent } className={OladentLogo} width="320px"/>
      <ContainerOption>
            <HeadMensaje>
              Previas citas y urgencias: <br />
              744-516-53-45
              <br />
              <ContainerOption>
                {/* facebook oladent */}
                <Option title='Facebook'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                </Option>
                <Option title='Instagram'>
                {/* instagram oladent */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                </Option>
                <Option title='Twitter-X'>
                {/* twitter-x oladent */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
                </Option>
                </ContainerOption>
              </HeadMensaje>
            <Option title='Inicio'>
              {/* Menú inicio */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
            </Option>
            <Option title='Servicios'>
              {/* Menú servicios */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-h-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z"/>
              </svg>
            </Option>
            <Option title='Citas'>
              {/* Menú citas */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
              </svg>
            </Option>
            <Option title='Contacto'>
              {/* Menú contacto */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
              </svg>
              </Option>
            <Option onClick={visualiza} title='Sesión'>
              {/* Menú inicio de sesión */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
              </svg>
            </Option>
        </ContainerOption>
      </Barra>


      {/*AQUI COMIENZA EL BODY*/}
      <BodySection>
        <ParrafoText>
        <h2>Bienvenido al Consultorio Dental Oladent</h2>
        La sonrisa es uno de los factores estéticos más importantes de una persona. Una sonrisa saludable ofrece una imagen positiva y estimula a la persona a sonreír con tranquilidad y naturalidad. Una sonrisa sana y armónica da seguridad en uno mismo y evita enfermedades. Es muy importante que usted se preocupe por mantener una buena higiene bucal y acudir al Dentista dos veces al año.
        <br />
        No hay mejor tratamiento preventivo, que el conocimiento, si conocemos el origen de las enfermedades bucales, podemos prevenirlas.
        Contamos con los más altos estándares de calidad ofreciéndote beneficios como:
        <p>
        <OpcionesTexto>Planes dentales hechos a la medida.</OpcionesTexto>
        <OpcionesTexto>Horarios que se adaptan a tu estilo de vida.</OpcionesTexto>
        <OpcionesTexto>Precios accesibles con materiales de la más alta calidad.</OpcionesTexto>
        </p>
        En Oladent nuestros tratamientos son una inversión para tu salud, obteniendo grandes beneficios.
        </ParrafoText>

        {/*Carrusel imagenes promocionales*/}
        <Carousel className='CarouselCSS'>
        <Carousel.Item >
        <img src={ PromoUno } alt="Primer slide" width="320px"/>
        <Carousel.Caption>
          <PieImg>
          ¡Es el momento de lucir TU SONRISA!.
          </PieImg>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </BodySection>


      {/*Oferta de servicios que ofeece el consultorio dental*/}
      <ServiciosSection>
      <ColumnasBody>
      <TituloH1>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
        </svg>
        Servicios</TituloH1>
      <h3>Odontología General</h3>
        <OpcionesTexto>Prevencion.</OpcionesTexto>
        <OpcionesTexto>Blanqueamientos.</OpcionesTexto>
        <OpcionesTexto>Profilaxis (Limpieza con ultrasonido).</OpcionesTexto>
        <OpcionesTexto>Resinas (eliminación de caries).</OpcionesTexto>
        <OpcionesTexto>Endodoncias.</OpcionesTexto>
        <OpcionesTexto>Tratamiento especial para niños (tecnicas de minima invacion).</OpcionesTexto>
        <OpcionesTexto>Extracciones.</OpcionesTexto>
        <OpcionesTexto>Tratamieno periodontal.</OpcionesTexto>
      </ColumnasBody>

      {/*Oferta de especialidad con que cuenta el consultorio dental*/}
      <ColumnasBody>
      <TituloH1>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
        </svg>
        Especialidades</TituloH1>
      <h3>Contamos con especialistas en Cirugía Maxilar</h3>
        <OpcionesTexto>Ortodoncia.</OpcionesTexto>
        <OpcionesTexto>Implantología.</OpcionesTexto>
      <h3>Atención a personas con:</h3>
        <OpcionesTexto>Diabetes.</OpcionesTexto>
        <OpcionesTexto>Hipertensión.</OpcionesTexto>
        <OpcionesTexto>Embarazadas.</OpcionesTexto>
        <OpcionesTexto>Enfermedades crónico degenerativas.</OpcionesTexto>
      </ColumnasBody>


      {/*Servicio de urgencias con que cuenta el consultorio dental*/}
      <ColumnasBody>
        <TituloH1>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
        </svg>
          Urgencias</TituloH1>  
        <h3>Servicio de urgencias las 24 horas</h3>    
          <OpcionesTexto>Dolor dental.</OpcionesTexto>
          <OpcionesTexto>Tratamiento de fracturas dentales</OpcionesTexto>
          <OpcionesTexto>Avulciones dentales (perdida de pieza dental por accidente)</OpcionesTexto>
          <OpcionesTexto>Contamos con radiografía</OpcionesTexto>
      </ColumnasBody>

      {/*Recuadro para iniciar sesión*/}
      <InicioSesion>
          {
          !usuario.length > 0
          ? <Sesion setUsuario={setUsuario} />
          : <Bienvenido usuario={usuario} setUsuario={setUsuario} />
          }
        </InicioSesion>
      </ServiciosSection>
      
      <InfoContacto>
      <ColumnasBody>
      <TituloH1>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
      </svg>
         Contacto</TituloH1>
      <h4>Previas citas y urgencias:</h4>
      <ParrafoText>
        <iframe src="https://www.youtube.com/embed/E0QZtdpjUzI?si=piqCaZMX9UyRcbkW" width={800} height={450} ></iframe>
        </ParrafoText>
        <DatosContacto><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone-vibrate-fill" viewBox="0 0 16 16">
        <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182"/>
        </svg> 744-516-53-45</DatosContacto>
        <DatosContacto><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
        </svg> hbc.ebano@gmail.com.</DatosContacto>
        
        </ColumnasBody>
      </InfoContacto>    

      <FooterConf><p>Desarrollada por Eulalio Chávez & Irene García <br />
Todos los derechos reservados © 2023.</p>
      
      </FooterConf>


    { visible && <Modal close={visualiza} /> }     
    </section>

    
  );
}

export default App;

