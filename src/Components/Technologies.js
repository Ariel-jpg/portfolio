import { GrReactjs, GrNode } from "react-icons/gr";
import { SiNextdotjs, SiPython, SiDjango, SiCplusplus, SiExpressvpn, SiCss3, SiMongodb, SiSqlite, SiJava, SiRedux, SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import styles from "../styles/Technologies.module.css";
import { useState } from "react";

const IconWithName = ({ Icon, techName, color, tech_link }) => {
    const [hover, setHover] = useState(undefined)

    return <a 
        href={tech_link} target="_blank" rel="noreferrer"
        className={styles.tech_container}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <Icon
            className={styles.tech_icon}
            style={{ color: hover && color }}
        />
        <span style={{ color: hover && color }} > {techName} </span>
    </a>
}

/**
 * It is a section of projects, it contains all the technologies in which I program
 */
function Technologies() {
    return <section className={styles.container}>
        <IconWithName Icon={GrReactjs} techName="react" color="cyan" tech_link="https://es.reactjs.org/" />
        <IconWithName Icon={FaNode} techName="node" color="green" tech_link="https://nodejs.org/es/docs/" />
        <IconWithName Icon={SiHtml5} techName="html5" color="orange" tech_link="https://devdocs.io/html/" />
        <IconWithName Icon={SiNextdotjs} techName="next" color="purple" tech_link="https://nextjs.org/" />
        <IconWithName Icon={SiPython} techName="python" color="yellow" tech_link="https://www.python.org/doc/" />
        <IconWithName Icon={SiDjango} techName="Django" color="green" tech_link="https://www.djangoproject.com/" />
        <IconWithName Icon={SiCplusplus} techName="C++" color="#659AD2" tech_link="https://devdocs.io/cpp/" />
        <IconWithName Icon={SiExpressvpn} techName="Express" color="pink" tech_link="https://expressjs.com/es/" />
        <IconWithName Icon={SiCss3} techName="css3" color="#2AA8DC" tech_link="https://developer.mozilla.org/es/docs/Web/CSS" />
        <IconWithName Icon={IoLogoJavascript} techName="Javascript" color="yellow" tech_link="https://developer.mozilla.org/es/docs/Web/JavaScript" />
        <IconWithName Icon={SiMongodb} techName="mongodb" color="#10AB50" tech_link="https://www.mongodb.com/es" />
        <IconWithName Icon={DiMysql} techName="mysql" color="orange" tech_link="https://www.mysql.com/" />
        <IconWithName Icon={SiSqlite} techName="sqlite" color="#7FC3EF" tech_link="https://www.sqlite.org/index.html" />
        <IconWithName Icon={SiJava} techName="java" color="red" tech_link="https://dev.java/learn/" />
        <IconWithName Icon={SiRedux} techName="redux" color="#764ABC" tech_link="https://es.redux.js.org/" />
    </section>
}

export default Technologies;