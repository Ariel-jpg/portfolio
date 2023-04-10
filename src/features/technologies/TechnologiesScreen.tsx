import styled from "styled-components";
import ButtonIcon from "../common/components/ButtonIcon";
import { SiCplusplus, SiExpressvpn, SiHtml5, SiMongodb, SiNodedotjs, SiRedux } from "react-icons/si";
import { FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const TechnologiesScreen = (): JSX.Element => {
    const onOpenTechnology = (url: string) => window.open(url, "_blank", 'noopener,noreferrer')
    return <Technologies>
        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiRedux size={size} />}
            iconSize="3em"
            legend="Redux"
            iconColor="#764ABC"
            onClick={() => onOpenTechnology("https://es.redux.js.org/")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <FaReact size={size} />}
            iconSize="3em"
            legend="React & RN"
            iconColor="cyan"
            onClick={() => onOpenTechnology("https://es.reactjs.org/")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiNodedotjs size={size} />}
            iconSize="3em"
            legend="Node"
            iconColor="green"
            onClick={() => onOpenTechnology("https://nodejs.org/es/about")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <FaJava size={size} />}
            iconSize="3em"
            legend="Java"
            iconColor="red"
            onClick={() => onOpenTechnology("https://www.java.com/en/download/help/whatis_java.html")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <DiJavascript1 size={size} />}
            iconSize="3em"
            legend="Javascript"
            iconColor="yellow"
            onClick={() => onOpenTechnology("https://developer.mozilla.org/es/docs/Web/JavaScript")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <FaPhp size={size} />}
            iconSize="3em"
            legend="Php"
            iconColor="#777BB3"
            onClick={() => onOpenTechnology("https://www.php.net/manual/es/intro-whatis.php")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiCplusplus size={size} />}
            iconSize="3em"
            legend="C++"
            iconColor="blue"
            onClick={() => onOpenTechnology("https://es.wikipedia.org/wiki/C%2B%2B")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <FaPython size={size} />}
            iconSize="3em"
            legend="Python"
            iconColor="yellow"
            onClick={() => onOpenTechnology("https://www.python.org/about/")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiExpressvpn size={size} />}
            iconSize="3em"
            legend="Express.js"
            iconColor="purple"
            onClick={() => onOpenTechnology("https://expressjs.com/")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiMongodb size={size} />}
            iconSize="3em"
            legend="Mongodb"
            iconColor="green"
            onClick={() => onOpenTechnology("https://www.mongodb.com/es")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <GrMysql size={size} />}
            iconSize="3em"
            legend="MySql"
            iconColor="orange"
            onClick={() => onOpenTechnology("https://www.mysql.com/why-mysql/")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <SiHtml5 size={size} />}
            iconSize="3em"
            legend="html5"
            iconColor="orange"
            onClick={() => onOpenTechnology("https://es.wikipedia.org/wiki/HTML5")}
        />

        <ButtonIcon
            Icon={({ size }: { size: number }) => <DiCss3Full size={size} />}
            iconSize="3em"
            legend="CSS3"
            iconColor="cyan"
            onClick={() => onOpenTechnology("https://es.wikipedia.org/wiki/CSS#CSS3")}
        />
    </Technologies>
}

const Technologies = styled.main`
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    justify-content: center;
    & > button { font-size: 1.3rem; }

    
    @media (max-width: 1024px){
        gap: 0;

        & > button { font-size: 1rem; }
    }
`;

export default TechnologiesScreen;