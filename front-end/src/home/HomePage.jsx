import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "./HomePage.css"

export default function HomePage() {
    const divTwoControls = useAnimation();
    const divThreeControls = useAnimation();
    const [divTwoAnimationTriggered, setDivTwoAnimationTriggered] = useState(false);
    const [divThreeAnimationTriggered, setDivThreeAnimationTriggered] = useState(false);
    const [clickMeOpened, setClickMeOpened] = useState(false);
    const [skillsAnimation, setSkillsAnimation] = useState(false);
    const [projectsAnimation, setProjectsAnimation] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const animatedDivTwo = document.getElementById('animatedDivTwo');
            const positionDivTwo = animatedDivTwo.getBoundingClientRect();
            const animatedDivThree = document.getElementById('animatedDivThree');
            const positionDivThree = animatedDivThree.getBoundingClientRect();
            const skillsHeader = document.querySelector('.betweenDivOneAndTwoHeader');
            const headerPos = skillsHeader.getBoundingClientRect();
            const projectsHeader = document.querySelector('.betweenDivTwoAndThreeHeader');
            const projectsPos = projectsHeader.getBoundingClientRect();


            // FOR ICONS AND HEADER
            if (positionDivTwo.top < window.innerHeight - 80 && positionDivTwo.bottom >= 0) {
                if (!divTwoAnimationTriggered) {
                    divTwoControls.start({ x: 0, opacity: 1 });
                    setDivTwoAnimationTriggered(true);
                    setSkillsAnimation(true);
                }
            } else {
                if (divTwoAnimationTriggered) {
                    setDivTwoAnimationTriggered(false);
                    setSkillsAnimation(false);
                    divTwoControls.start({ x: '100vw', opacity: 0 });
                }
            }

            // FOR PROJECTS AND HEADER
            if (positionDivThree.top < window.innerHeight - 80 && positionDivThree.bottom >= 0) {
                if (!divThreeAnimationTriggered) {
                    divThreeControls.start({ x: 0, opacity: 1 });
                    setDivThreeAnimationTriggered(true);
                    setProjectsAnimation(true);
                }
            } else {
                if (divThreeAnimationTriggered) {
                    setDivThreeAnimationTriggered(false);
                    setProjectsAnimation(false);
                    divThreeControls.start({ x: '-100vw', opacity: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [divTwoControls, divThreeControls, divTwoAnimationTriggered, divThreeAnimationTriggered]);



    return (
        <div className="homePage">
            <div className="homePageChildOne">
                <div className="homePageChildOneDivOne">
                    {/* <img className="childOneDivOneImage" src={childOneDivOneImage}/> */}
                    <div className="homePageChildOneDivOneHeaderDivs">
                        <h1 className="homePageChildOneDivOneHeaderOne">
                            Thank You For Your Interest
                        </h1>
                    </div>
                    <div className="homePageChildOneDivOneHeaderDivs">
                        <h1 className="homePageChildOneDivOneHeaderTwo">
                            Get To Know Me!
                        </h1>
                    </div>
                    <div class="scroll-indicator">
                        <FontAwesomeIcon
                            class="dot" id="dot1"
                        icon={faAngleDown} />
                        <FontAwesomeIcon
                            class="dot" id="dot2"
                        icon={faAngleDown} />
                        <FontAwesomeIcon
                            class="dot" id="dot3"
                            icon={faAngleDown} />
                        <FontAwesomeIcon
                            class="dot" id="dot4"
                            icon={faAngleDown} />
                    </div>
                </div>
                <div className='betweenDivOneAndTwoHeaderDiv'>
                    <h1
                        style={{ '--borderWidth': skillsAnimation ? '100%' : '0' }}
                        className='betweenDivOneAndTwoHeader'>
                        Skills
                    </h1>
                </div>
                <div className='belowBreakOut'>
                    <motion.div
                        id="animatedDivTwo"
                        initial={{ x: '100vw', opacity: 0 }}
                        animate={divTwoControls}
                        transition={{ type: 'spring', stiffness: 40 }}
                        className="homePageChildOneDivTwo"
                    >
                        <div className='codeIconsPhotosDiv'>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="javascript-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    JavaScript
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="python-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    Python
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="sql-96.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    SQL
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="react-native-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    React
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="django-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    Django
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="docker-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    Docker
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="css-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    CSS
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="typescript-150.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    Typescript
                                </h1>
                            </div>
                            <div className='codeIconsPhotoDiv'>
                                <img
                                    className='codeIconsPhotos'
                                    src="node-js-128.png" />
                                <h1 className='codeIconsPhotosHeader'>
                                    Node.js
                                </h1>
                            </div>
                        </div>
                    </motion.div>

                    <div className='betweenDivTwoAndThreeHeaderDiv'>
                        <h1
                            style={{ '--borderWidthProjects': projectsAnimation ? '100%' : '0' }}
                            className='betweenDivTwoAndThreeHeader'>
                            My Projects
                        </h1>
                    </div>
                        <motion.div
                            id="animatedDivThree"
                            initial={{ x: '-100vw', opacity: 0 }}
                            animate={divThreeControls}
                            transition={{ type: 'spring', stiffness: 40 }}
                            className="homePageChildOneDivThree"
                        >
                            <div className='projectsDiv'>
                                <div className='projectVideoDiv'>
                                    <h1 className='projectVideoHeader'>
                                        Midi
                                    </h1>
                                    <img
                                        className='projectVideo'
                                        src="https://media2.giphy.com/media/2IudUHdI075HL02Pkk/giphy.gif?cid=ecf05e4720ho4l063xuwxvdajsqihtkevtrlsevsf0o0zewo&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                                    <div className='projectVideoDescriptionDiv'>
                                        <div className='projectVideoDescriptionDivChildOne'>
                                            <h3 className='projectVideoDescriptionDivChildOneHeader'>
                                                Music Discovery
                                            </h3>
                                        </div>
                                        <div className='projectVideoDescriptionDivChildTwo'>
                                            <p className='projectVideoDescriptionDivChildTwoDescription'>
                                                test
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='projectVideoDiv'>
                                    <h1 className='projectVideoHeader'>
                                        Lucid Beauty
                                    </h1>
                                    <img
                                        className='projectVideo'
                                        src="https://media2.giphy.com/media/2IudUHdI075HL02Pkk/giphy.gif?cid=ecf05e4720ho4l063xuwxvdajsqihtkevtrlsevsf0o0zewo&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                                    <div className='projectVideoDescriptionDiv'>
                                        <div className='projectVideoDescriptionDivChildOne'>
                                            <h3 className='projectVideoDescriptionDivChildOneHeader'>
                                                Health And Wellness
                                            </h3>
                                        </div>
                                        <div className='projectVideoDescriptionDivChildTwo'>
                                            <p className='projectVideoDescriptionDivChildTwoDescription'>
                                                test
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='projectVideoDiv'>
                                    <h1 className='projectVideoHeader'>
                                        SoleMate
                                    </h1>
                                    <img
                                        className='projectVideo'
                                        src="https://media2.giphy.com/media/2IudUHdI075HL02Pkk/giphy.gif?cid=ecf05e4720ho4l063xuwxvdajsqihtkevtrlsevsf0o0zewo&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                                    <div className='projectVideoDescriptionDiv'>
                                        <div className='projectVideoDescriptionDivChildOne'>
                                            <h3 className='projectVideoDescriptionDivChildOneHeader'>
                                                Shoe Wardrobe
                                            </h3>
                                        </div>
                                        <div className='projectVideoDescriptionDivChildTwo'>
                                            <p className='projectVideoDescriptionDivChildTwoDescription'>
                                                test
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                </div>
            </div>
            <div className="homePageChildTwo">

            </div>
            <img
                className="backGroundPhotoPortfolio"
                src="backGroundPhotoPortfolio.jpg" />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2 style={{margin: "20px 0 0 0"}}>
                    Icon Sources:
                </h2>
                <h4
                    onClick={() => setClickMeOpened(!clickMeOpened)}
                    style={{ margin: 5, color: "pink", cursor: "pointer" }}>
                    Click Me
                </h4>
                {clickMeOpened && (
                    <div>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} target="_blank" href="https://icons8.com/icon/V6HShIzw21x7/javascript">JavaScript</a> icon by <a style={{ color: "pink" }} target="_blank" href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/uLDrtp8o8zTG/python">Python</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/59952/sql">SQL</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/t4YbEbA834uH/react-native">React Native</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/qc3TyHJPxEoH/django">Django</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/GOHWqwnSE8Sv/docker">Docker</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/5cVdiiKKi0vX/css">CSS</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/vMqgHSToxrJR/typescript">TypeScript</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            <a style={{ color: "pink" }} href="https://icons8.com/icon/ouWtcsgDBiwO/node-js">Node Js</a> icon by <a style={{ color: "pink" }} href="https://icons8.com">Icons8</a>
                        </h4>
                    </div>
                )}
            </div>
        </div>
    )
}
