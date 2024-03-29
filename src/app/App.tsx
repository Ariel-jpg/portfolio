import { useState } from 'react';
import styled from 'styled-components';
import { AiFillProject, AiFillLinkedin } from 'react-icons/ai';
import { IoSchoolSharp } from 'react-icons/io5';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

import ButtonIcon from '../features/common/components/ButtonIcon';

import backgroundImage from "../assets/ariel_aguilera_image.jpg";
import PresentationScreen from '../features/presentation/PresentationScreen';
import { useSwipeable } from 'react-swipeable';
import ProjectsScreen from '../features/projects/ProjectsScreen';
import EducationScreen from '../features/education/EducationScreen';
import TechnologiesScreen from '../features/technologies/TechnologiesScreen';


function App() {
  const [section, setSection] = useState(0);

  const swip = useSwipeable({
    onSwipedDown: () => handleSwipe({ deltaY: -1 }),
    onSwipedUp: () => handleSwipe({ deltaY: 1 })
  })

  const handleSwipe = (e: React.WheelEvent<HTMLElement> | { deltaY: number }) => {
    if (e.deltaY > 0 && section < 3) setSection(section + 1);
    else if (e.deltaY < 0 && section > 0) setSection(section - 1);
  }

  const onRedirect = (url:string) => window.open(url, "_blank", 'noopener,noreferrer');

  return <Wrapper>
    <Contacto>
      <ButtonIcon
        legend='EMAIL'
        Icon={({ size }: { size: string }) => <SiGmail size={size} />}
        onClick={() => onRedirect("mailto:ariel.aguilera.professional@gmail.com")}
        active
      />

      <ButtonIcon
        legend='LINKEDIN'
        Icon={({ size }: { size: string }) => <AiFillLinkedin size={size} />}
        onClick={() => onRedirect("https://www.linkedin.com/in/ariel-aguilera-9007971a6/")}
        active
      />

      <ButtonIcon
        legend='GITHUB'
        Icon={({ size }: { size: string }) => <BsGithub size={size} />}
        onClick={() => onRedirect("https://github.com/Ariel-jpg")}
        active
      />
    </Contacto>

    <NavBar>
      <ButtonIcon
        legend='PROYECTOS'
        Icon={({ size }: { size: string }) => <AiFillProject size={size} />}
        onClick={() => setSection(1)}
        sustainedActivation={section === 1}
        active={section === 1}
      />

      <ButtonIcon
        legend='EDUCACIÓN'
        Icon={({ size }: { size: string }) => <IoSchoolSharp size={size} />}
        onClick={() => setSection(2)}
        sustainedActivation={section === 2}
        active={section === 2}
      />

      <ButtonIcon
        legend='TECNOLOGÍAS'
        Icon={({ size }: { size: string }) => <RiTerminalBoxFill size={size} />}
        onClick={() => setSection(3)}
        sustainedActivation={section === 3}
        active={section === 3}
      />
    </NavBar>

    <Screen onWheel={(e) => handleSwipe(e)} {...swip} >
      {section == 0 && <PresentationScreen />}
      {section == 1 && <ProjectsScreen />}
      {section == 2 && <EducationScreen />}
      {section == 3 && <TechnologiesScreen />}
    </Screen>
  </Wrapper >
}

const NavBar = styled.section`
  grid-area: navbar;

  display: flex;
  justify-content: space-evenly;
`;

const Contacto = styled.section`
  grid-area: contacto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

const Screen = styled.section`
  grid-area: screen;
  padding: 0 2% 2% 2%;
  width: auto;
  user-select: none;

  @media (max-width: 1024px) {
    padding: 0;
    height: 100%;
  }

  & > main {
    background-color: rgba(0, 0, 0, .7);
    border-radius: 30px;

    width: 100%;
    height: 100%;
    color: white;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-areas: "contacto navbar"
                       "contacto screen";
  
  grid-template-columns: 10% auto;
  grid-template-rows: 10% auto;

  & > section {  z-index: 1;  }

  &::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position-y: 25%;
    background-repeat: no-repeat;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    transform: scale(1.1);

    z-index: 0;
  }

  @media (max-width: 1024px) {
    /* overflow-y: auto; */
    min-height: 100vh;
    height: fit-content;

    grid-template-areas: "navbar"
                         "screen"
                         "contacto";
  
    grid-template-columns: 80%;
    grid-template-rows: 100px auto 100px;

    justify-content: center;
    align-items: center;
  }
`;

export default App
