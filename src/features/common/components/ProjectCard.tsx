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

const StyledCard = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const BackgroundImage = styled.div<StyledCardProps>`
    width: 17vw;
    min-width: 180px;
    aspect-ratio: 6/4;

    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;

    border-radius: 20px;
`

export default ProjectCard;