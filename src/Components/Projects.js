import Image from "next/image";
import styles from "../styles/Projects.module.css"
import image_1 from "../Assets/portfolio_presentation.png"
import image_2 from "../Assets/sinif_presentation.png"

/**
 * Card component
 * @param  {string} projectName It's the name of project
 * @param  {string} projectImage It's image path
 */

const ProjectCard = ({ projectName, projectImage, projectLink }) => (
    <div className={styles.project_card_container} onClick>
        <div className={styles.project_image}>
            <Image src={projectImage} alt={"Project: " + projectName + " image"} objectFit="cover" layout="fill" contentEditable="false" />
        </div>   
        <span>
            {projectName}
        </span>
    </div>
)

/**
 * It's a projects section, contain all projects uploaded to the network
 */
function Projects() {
    return <section  className={styles.container}>
        <ProjectCard projectName="Sinif" projectImage={image_1} />
        <ProjectCard projectName="Portfolio" projectImage={image_2} /> 
    </section>
}

export default Projects;