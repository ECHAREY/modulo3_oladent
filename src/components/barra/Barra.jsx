import styled from 'styled-components';

/* Logo Oladent */
const OladentLogo = styled.img`
    width: 70px;
    height: 25px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

/*Estilos para el Nav del Menú */
const Barra = styled.nav`
    width: 100%;
    height: 150px;

    background-color: #0257a8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/*Estilos para el Ul del Menú */
const ContainerOption = styled.ul`
    width: 150 px;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    list-style-type: none;
    align-items: center;
    
`;

/*Estilos para el Li del Menú */
const Option = styled.li`
    font-weight: bold;
    align-items: center;
    text-align: right;
    display: flex;
    color: #5DADE2;
    &:hover {
        background-color: #D6EAF8;
        cursor: pointer;
        text: whithe;
        border-radius: 10px;
    }
`;
/*Estilos para el recuadro de redes sociales*/

const HeadMensaje = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style-type: none;
    font-weight: bold;
    color: white;
    font-size: 35px;
    justify-content: center;
    text-align: center;
    align-items: center;
`;


export { OladentLogo, Barra, ContainerOption, Option, HeadMensaje };