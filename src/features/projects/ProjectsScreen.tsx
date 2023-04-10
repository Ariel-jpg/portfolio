import styled from "styled-components";
import ProjectCard from "../common/components/ProjectCard";

import portfolioImage from "../../assets/portfolio_presentation.png";
import nasaPhotoDayImage from "../../assets/photo_day_presentation.png";

const ProjectsScreen = () : JSX.Element => {
    return <Projects>
        <ProjectCard backgroundImage={portfolioImage} legend="Portfolio" url="" />
        <ProjectCard backgroundImage={portfolioImage} legend="Portfolio" url="" />
        <ProjectCard backgroundImage={nasaPhotoDayImage} legend="Nasa photo day" url="https://nasa-photo-day-page.netlify.app/" />
        <ProjectCard backgroundImage={nasaPhotoDayImage} legend="Nasa photo day" url="https://nasa-photo-day-page.netlify.app/" />
        <ProjectCard backgroundImage={nasaPhotoDayImage} legend="Nasa photo day" url="https://nasa-photo-day-page.netlify.app/" />
    </Projects>
}


const Projects = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* overflow: hidden; */
    height: 100%;
    gap: 20px;
    
    padding-top: 20px;
    box-sizing: border-box;
`;

export default ProjectsScreen;