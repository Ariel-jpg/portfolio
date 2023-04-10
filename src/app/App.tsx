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


function App() {
  const [section, setSection] = useState(1);

  const swip = useSwipeable({
    onSwipedDown: () => handleSwipe({ deltaY: -1 }),
    onSwipedUp: () => handleSwipe({ deltaY: 1 })
  })

  const handleSwipe = (e: React.WheelEvent<HTMLElement> | { deltaY: number }) => {
    if (e.deltaY > 0 && section < 4) setSection(section + 1);
    else if (e.deltaY < 0 && section > 0) setSection(section - 1);
  }


  return <Wrapper>
    <Contacto>
      <ButtonIcon
        legend='EMAIL'
        Icon={({ size }: { size: string }) => <SiGmail size={size} />}
        onClick={() => { }}
        active
      />

      <ButtonIcon
        legend='LINKEDIN'
        Icon={({ size }: { size: string }) => <AiFillLinkedin size={size} />}
        onClick={() => { }}
        active
      />

      <ButtonIcon
        legend='GITHUB'
        Icon={({ size }: { size: string }) => <BsGithub size={size} />}
        onClick={() => { }}
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
        legend='TECNOLOGÍA'
        Icon={({ size }: { size: string }) => <RiTerminalBoxFill size={size} />}
        onClick={() => setSection(3)}
        sustainedActivation={section === 3}
        active={section === 3}
      />
    </NavBar>

    <Screen onWheel={(e) => handleSwipe(e)} {...swip} >
      {section == 0 && <PresentationScreen />}
      {section == 1 && <ProjectsScreen />}
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
    max-height: 85vh;
    color: white;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
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
    grid-template-areas: "navbar"
                         "screen"
                         "contacto";
  
    grid-template-columns: 80%;
    grid-template-rows: auto 80% auto;

    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  }
`;

export default App
