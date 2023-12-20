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


    document.querySelectorAll('.codeIconsPhotosHeader').forEach(header => {
        header.addEventListener('mouseover', function () {
            const imageId = this.id.replace('Header', '');
            const image = document.getElementById(imageId);
            if (image) {
                image.style.transform = 'scale(1.2)';
            }
        });

        header.addEventListener('mouseout', function () {
            const imageId = this.id.replace('Header', '');
            const image = document.getElementById(imageId);
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    const pictures = document.querySelectorAll('#picture1, #picture2, #picture3, #picture4, #picture5, #picture6, #picture7, #picture8, #picture9');

    pictures.forEach(picture => {
        picture.addEventListener('mouseover', () => {
            pictures.forEach(pic => {
                if (pic !== picture) pic.style.transform = 'scale(0.8)';
            });
        });
        picture.addEventListener('mouseout', () => {
            pictures.forEach(pic => pic.style.transform = 'scale(1)');
        });
    });


    return (
            <div className="homePage">
                <div className="homePageChildOne">
                    <div className="homePageChildOneDivOne">
                        <div className="homePageChildOneDivOneHeaderDiv1">
                            <div className='homePageChildOneDivOneHeaderOneDiv'>
                                <h1 className="homePageChildOneDivOneHeaderOne">
                                    Thank You For Your Interest
                                </h1>
                            </div>
                            <div className='homePageChildOneDivOneHeaderTwoDiv'>
                                <div className='homePageChildOneDivOneHeaderTwoDivPhotoDiv'>
                                    <div className='homePageChildOneDivOneHeaderTwoDivPhotoBackground'>
                                    </div>
                                    <img
                                    className='homePageChildOneDivOneHeaderTwoDivPhoto'
                                    src='Cayman1.png'/>
                                </div>
                                <h1 className='homePageChildOneDivOneHeaderTwoDiv'>
                                    My name is Cayman Geiger
                                </h1>
                            </div>
                        </div>
                        <div className='homePageChildOneDivOneHeaderDiv2Parent'>
                            <div className="homePageChildOneDivOneHeaderDiv2">
                                <h1 className="homePageChildOneDivOneHeaderTwo">
                                    Get To Know Me More!
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
                            </div>
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
                        <div id="containerForAnimatedDivTwo" style={{ overflow: 'hidden' }}>
                            <motion.div
                                id="animatedDivTwo"
                                initial={{ x: '100vw', opacity: 0 }}
                                animate={divTwoControls}
                                transition={{ type: 'spring', stiffness: 40 }}
                                className="homePageChildOneDivTwo"
                            >
                                <div className='codeIconsPhotosDiv'>
                                    <div className="codeIconsPhotoDiv">
                                        <img
                                            id="picture1"
                                            className='codeIconsPhotos'
                                            src="javascript-128.png" />
                                        <h1
                                        id="picture1Header"
                                        className='codeIconsPhotosHeader'>
                                            JavaScript
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture2"
                                            className='codeIconsPhotos'
                                            src="python-128.png" />
                                        <h1
                                        id="picture2Header"
                                        className='codeIconsPhotosHeader'>
                                            Python
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture3"
                                            className='codeIconsPhotos'
                                            src="sql-96.png" />
                                        <h1
                                        id="picture3Header"
                                        className='codeIconsPhotosHeader'>
                                            SQL
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture4"
                                            className='codeIconsPhotos'
                                            src="react-native-128.png" />
                                        <h1
                                        id="picture4Header"
                                        className='codeIconsPhotosHeader'>
                                            React
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture5"
                                            className='codeIconsPhotos'
                                            src="django-128.png" />
                                        <h1
                                        id="picture5Header"
                                        className='codeIconsPhotosHeader'>
                                            Django
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture6"
                                            className='codeIconsPhotos'
                                            src="docker-128.png" />
                                        <h1
                                        id="picture6Header"
                                        className='codeIconsPhotosHeader'>
                                            Docker
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture7"
                                            className='codeIconsPhotos'
                                            src="css-128.png" />
                                        <h1
                                        id="picture7Header"
                                        className='codeIconsPhotosHeader'>
                                            CSS
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture8"
                                            className='codeIconsPhotos'
                                            src="typescript-150.png" />
                                        <h1
                                        id="picture8Header"
                                        className='codeIconsPhotosHeader'>
                                            Typescript
                                        </h1>
                                    </div>
                                    <div className='codeIconsPhotoDiv'>
                                        <img
                                            id="picture9"
                                            className='codeIconsPhotos'
                                            src="node-js-128.png" />
                                        <h1
                                        id="picture9Header"
                                        className='codeIconsPhotosHeader'>
                                            Node.js
                                        </h1>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='betweenDivTwoAndThreeHeaderDiv'>
                            <h1
                                style={{ '--borderWidthProjects': projectsAnimation ? '100%' : '0' }}
                                className='betweenDivTwoAndThreeHeader'>
                                My Projects
                            </h1>
                        </div>
                        <div id="containerForAnimatedDivThree" style={{ overflow: 'hidden' }}>
                            <motion.div
                                id="animatedDivThree"
                                initial={{ x: '-100vw', opacity: 0 }}
                                animate={divThreeControls}
                                transition={{ type: 'spring', stiffness: 40 }}
                                className="homePageChildOneDivThree"
                            >
                                <div className='projectsDiv'>

                                    <div className='projectVideoDiv1'>
                                        <div className="front1">
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
                                        <div className="back1">
                                            <div className="back1HeaderDiv">
                                                <h1 className="back1Header">
                                                    Midi
                                                </h1>
                                            </div>
                                            <a href="https://github.com/your-github-link" target="_blank">GitHub</a>
                                        </div>
                                    </div>

                                    <div className='projectVideoDiv2'>
                                        <div className="front2">
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
                                                        Discover relaxation and wellness with our health-focused website, expertly designed for easy service search and booking. Fully integrated with JWT token technology for secure sessions, it lets clients effortlessly find and schedule various esthetician services. Our advanced navigation menu, complete with social media links, ensures a seamless, enriching online experience. Perfect for those seeking services to fit their lifestyle.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="back2">
                                            <a href="https://github.com/your-github-link" target="_blank">GitHub</a>
                                        </div>
                                    </div>

                                    <div className='projectVideoDiv3'>
                                        <div className="front3">
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
                                        <div className="back3">
                                            <a href="https://github.com/your-github-link" target="_blank">GitHub</a>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
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
                        <div className='linksIcons'>
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
