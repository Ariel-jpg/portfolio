import styled from "styled-components";
import backgroundImage from "../../assets/ariel_aguilera_image.jpg";

const PresentationScreen = (): JSX.Element => {
    return <Presentation>
    <h1>ARIEL <br /> AGUILERA</h1>
    <div>
      <h2>DESARROLLADOR SEMI-SENIOR</h2>
      <Animation />
    </div>
  </Presentation>
}
  
const Presentation = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-y: 20%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1, & > div > h2 { font-weight: lighter; }

  & > h1 {
    font-size: 3rem;
    transform: translateX(-3%);
    margin-top: 5%;
  }

  & > div { 
    margin-bottom: 2.5%; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & > div > h2 {
    position: relative;
    font-size: 1.2rem;
    margin-left: 3%;
    margin-bottom: 30px;

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: white;
      left: -4%;
      top: 0;
    }
  }
      
  @media (max-width: 1024px) {
    & > h1 { margin-top: 10%; transform: translateX(-10%); font-size: 2.5rem; }
    & > div > h2 { 
      font-size: 1rem;
      background-color: rgba(0,0,0,0.6);
    }

    background-position-x: 50%;
  }
`;
  const Animation = styled.div`
  position: relative;
  width: 20px;
  height: 30px;
  border: solid 1px white;
  border-radius: 10px;
  align-self: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 5px;
    height: 5px;
    transform: translate(-50%, 50%);
    border-radius: 100%;
    background-color: white;
    transition: 1s;
    align-self: center;
    animation: wheel 1s ease-in-out infinite;

    @media (max-width: 1024px) { animation-direction: reverse; }
  }

  @media (max-width: 1024px) { border-radius: 2px; }

  @keyframes wheel {
    from {
      top: 10%;
      opacity: 0;
    }
    to {
      top: 40%;
      opacity: 1;
    }
  }
`;
  
export default PresentationScreen;