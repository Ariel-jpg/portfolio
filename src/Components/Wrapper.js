import Head from "next/head"
import { useEffect, useState } from "react";
import styles from "../styles/Wrapper.module.css"

import { BsGithub } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { AiFillProject, AiFillCode } from "react-icons/ai"
import { FaGraduationCap } from "react-icons/fa"

import ProjectsSection from "./Projects"
import Presentation from "./Presentation";
import EducationSection from "./Education";
import TechnologiesSection from "./Technologies";

import { useSwipeable } from "react-swipeable"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


function Wrapper({ component: Component, props }) {
    const [section, setSection] = useState(1)

    const [overSecondLi, setOverSecondLi] = useState(false);
    const [overThirdLi, setOverThirdLi] = useState(false);

    useEffect(() => {
        console.log(section)
    }, [section])

    const handlers = useSwipeable({
        onSwipedDown: () => section < 4 && setSection(section + 1),
        onSwipedUp: () => section > 1 && setSection(section - 1)
    });

    return (
        <>
            <Head>
                <title>Ariel Aguilera</title>
                <meta name="description" content="Ariel Aguilera portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className={styles.general_content}>
                    <div className={styles.background_image} />

                    <section className={styles.contact_bar}>
                        <a href="https://github.com/Ariel-jpg" target="_blank" rel="noreferrer noopener" className={styles.hover_text_icon}>
                            <BsGithub className={styles.icons} />
                            GITHUB
                        </a>
                        <a href="mailto:epofmip@gmail.com" className={styles.hover_text_icon}> {/* TODO */}
                            <SiGmail className={styles.icons} />
                            EMAIL
                        </a>
                    </section>

                    <section className={styles.main_content}>
                        <nav>
                            <ul>
                                <li onClick={() => setSection(2)}>
                                    <span />
                                    <div style={{ opacity: section == 2 && "1" }} >
                                        <AiFillProject className={section !== 0 ? styles.li_icons : styles.li_icons_selected}
                                        />
                                        <strong>
                                            PROYECTOS
                                        </strong>
                                    </div>
                                    <span style={{ opacity: overSecondLi && 1 }} />
                                </li>
                                <li
                                    onMouseOver={() => setOverSecondLi(true)}
                                    onMouseLeave={() => setOverSecondLi(false)}
                                    onClick={() => setSection(3)}
                                >
                                    <span />
                                    <div style={{ opacity: section == 3 && "1" }} >
                                        <FaGraduationCap className={styles.li_icons} />
                                        <strong>
                                            EDUCACIÓN
                                        </strong>
                                    </div>
                                    <span style={{ opacity: overThirdLi && 1 }} />
                                </li>
                                <li
                                    onMouseOver={() => setOverThirdLi(true)}
                                    onMouseLeave={() => setOverThirdLi(false)}
                                    onClick={() => setSection(4)}
                                >
                                    <span style={{ opacity: overSecondLi && 1 }} />
                                    <div style={{ opacity: section == 4 && "1" }} >
                                        <AiFillCode className={styles.li_icons} />
                                        <strong>
                                            TECNOLOGÍAS
                                        </strong>
                                    </div>
                                    <span />
                                </li>
                            </ul>
                        </nav>
                        <ReactScrollWheelHandler
                            upHandler={(e) => section > 1 && setSection(section - 1)}
                            downHandler={(e) => section < 4 && setSection(section + 1)}
                            className={styles.content_container}
                            {...handlers}
                        >

                            {
                                section == 1 ? <Presentation />
                                    : section == 2 ? <ProjectsSection />
                                        : section == 3 ? <EducationSection />
                                            : <TechnologiesSection />
                            }
                        </ReactScrollWheelHandler>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Wrapper;