import styled from "styled-components";

const EducationScreen = () : JSX.Element => {
    return <Education>
        <section>
            <h2>FINALIZADO</h2>

            <Experience>
                <h3>TÉCNICO EN INFOMÁTICA PERSONAL Y PROFESIONAL</h3>
                <ul>
                    <li>Bachiller ténico con orientación a TI</li>
                    <li>Escuela ténica número 2 "Dr. René Favaloro"</li>
                </ul>
            </Experience>

            <Experience>
                <h3>DESARROLLADOR JAVA EE NIVEL 1 - REF: JB183 RED HAT</h3>
                <ul>
                    <li>Certificación de carácter nacional</li>
                    <li>Instituto de educación tecnológica (INET)</li>
                </ul>
            </Experience>
        </section>
        <section>
            <h2>EN CURSO</h2>

            <Experience>
                <h3>INGENIERO EN INFORMÁTICA - 3er año</h3>
                <ul>
                    <li>Título de grado</li>
                    <li>Universidad de Morón</li>
                </ul>
            </Experience>

            <Experience>
                <h3>LICENCIADO EN CIENCIAS MATEMÁTICAS - 1er año</h3>
                <ul>
                    <li>Título de grado</li>
                    <li>Universidad de Buenos Aires (UBA)</li>
                </ul>
            </Experience>
        </section>
    </Education>
}

const Experience = styled.article`
    transform: translateX(20px);

    & > h3 {
        display: flex;
        font-weight: normal;
        position: relative;
        align-items: center;
        margin: 0;
        
        &::before {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            left: -20px;
            background-color: white;
        }
    }

    & > ul {
        margin-top: 5px;
        padding-left: 15px;

        & > li {
            font-size: 1.1em;
            margin: 0;
        }
    }
`

const Education = styled.main`
    display: grid;
    grid-template-areas: "FINALIZADO ENCURSO";
    grid-template-rows: 50%;
    grid-template-columns: 40% 40%;
    justify-content: space-evenly;

    overflow: hidden;

    & > section { margin-top: 5%; }

    & > section > h2 {
        font-weight: normal;
        position: relative;

        border-bottom: solid 2px white;
        padding-bottom: 10px;

        &::after {
            content: "";
            width: 100%;
            height: 2px;
            color: white;
        }
    }

    & > section:nth-child(1) { grid-area: FINALIZADO; }
    & > section:nth-child(2) { grid-area: ENCURSO; }

    @media (max-width: 1024px){
        grid-template-areas: "FINALIZADO" "ENCURSO";
        grid-template-rows: auto auto;
        grid-template-columns: 80%;
        align-items: center;

        font-size: 0.8rem;
    }
`;

export default EducationScreen;