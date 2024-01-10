import styled from 'styled-components';

/* Seccion para el Body */
const BodySection = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    background-color: #E5E7E9;
    color: black;
    font-size: 15px;
    justify-items: stretch;
    text-align: justify;
    align-items: center;

`;

/* Seccion para el Body */
const ParrafoText = styled.div`
    display: flex;
    color: black;
    font-size: 15px;
    justify-items: stretch;
    text-align: justify;
    align-items: center;
    flex-direction: column;
    margin: 25px;
`;

/* Seccion para el Body */
const OpcionesTexto = styled.li`
    font-size: 15px;
    justify-items: justify;
    text-align: justify;
    align-items: justify;
    flex-direction: column;
`;

/* Tamaño de imagen carrusel */
const PieImg = styled.div`
    text-align: center;
`;

const ServiciosSection = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    background-color: #E5E7E9;
    color: black;
    font-size: 15px;
    justify-items: stretch;
    text-align: justify;
    align-items: center;

`;

/* Seccion para el Body */
const ColumnasBody = styled.div`
    display: flex;
    color: black;
    font-size: 15px;
    justify-items: center;
    text-align: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 25px;
    
`;

/* Seccion para el Body */
const InicioSesion = styled.div`
    display: flex;
    color: #0257a8;
    background-color: #A9CCE3;
    font-size: 15px;
    justify-items: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin: 25px;
`;

/* Seccion para el Body */
const BtnBuscar = styled.div`
    width: 100%;
    display: flex-end;
    color: black;
    font-size: 15px;
    justify-items: center;
    text-align: center;
    align-items: center;
    flex-direction: stretch;
    margin: 25px;
    `;


    /* Seccion para el Body */
const TituloH1 = styled.div`
    color: #0257a8;
    font-weight: bold;
    font-size: 25px;
    `;

/* Seccion para el Body */
const DatosContacto = styled.div`
color: #0257a8;
font-size: 25px;
`;

/*Estilos para el Nav del Menú */
const FooterConf = styled.nav`
    width: 100%;
    height: 100px;
    background-color: #424949;
    color: white;
    display: flex;
    text-align: center;
    justify-content: center;
`;

/* Seccion para el Body */
const InfoContacto = styled.div`
    display: flex;
    color: gray;
    background-color: white;
    font-size: 15px;
    justify-items: right;
    text-align: center;
    align-items: right;
    flex-direction: column;
    border-radius: 10px;
    margin: 25px;
`;

export { BodySection, ParrafoText, OpcionesTexto, PieImg, ServiciosSection, ColumnasBody, InicioSesion, BtnBuscar, TituloH1, FooterConf, DatosContacto, InfoContacto };