import styles from "../styles/Education.module.css"


function FormatEducation({ year, title, description = "" }) {
    let title_ = description.slice(0, description.indexOf("-"))
    let end = description.slice(description.indexOf("-") + 1)
    
    return <div className={styles.degree_container}>
        <span className={styles.degree_year}>{year}</span>
        <div className={styles.degree_details}>
            <strong>{title}</strong>
            <span>• {end} <br /> • {title_} </span>
            {/* <span>{description}</span> */}
        </div>
    </div>
}


/**
 * It's a projects section, contain all degrees and certifications
 */
function Education() {
    return <section className={styles.container}>
        <FormatEducation
            year="2019"
            title="Desarrollador Java nivel 1"
            description="
            Certificación de carácter nacional - Instituto nacional de educación tecnológica (INET)"
        />
        <FormatEducation
            year="2020"
            title="Técnico en informática personal y profesional"
            description='Bachiller técnico con orientación a TI - Escuela técnica número 2 "Dr. René Favaloro"'
        />
        <FormatEducation
            year="2021"
            title="Ingeniería en informática | En curso"
            description='Titulo de grado - Universidad Austral'
        />
        <FormatEducation
            year="2021"
            title="Licenciatura en psicología | En curso"
            description='Titulo de grado - Universidad de Buenos Aires (UBA)'
        />
    </section>
}

export default Education;