import styled from "@emotion/styled"

type StyledCardProps = {
    backgroundImage: string
}

interface ProjectCardProps extends StyledCardProps {
    legend: string,
    url: string
}

const ProjectCard = ({ legend, backgroundImage, url } : ProjectCardProps) : JSX.Element => {
    return <StyledCard href={url}>
        <BackgroundImage backgroundImage={backgroundImage} />
        <span children={legend} />
    </StyledCard>
}

const BackgroundImage = styled.div<StyledCardProps>`
 background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: fit-content;
    width: 10%;
    min-width: 180px;
    border-radius: 20px;

    aspect-ratio: 6/4;
`

const StyledCard = styled.a`
    position: relative;
    /* background-color: red; */
    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ProjectCard;