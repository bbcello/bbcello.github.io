import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import BurgerImg from '../Image/BurgerImg';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const defaultSkills = {
  title: 'None',
  stacks: [],
  burger: 'burger_blank.png',
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { frontEnd, backEnd, tools } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverLayer, setHoverLayer] = useState(null);
  const [clickLayer, setClickLayer] = useState(null);
  const [activeLayer, setActiveLayer] = useState(defaultSkills);
  const [activeSkills, setActiveSkills] = useState(null);
  const [burger, setBurger] = useState(defaultSkills.burger);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // Load the burger image once skills load
  useEffect(() => {
    setBurger(activeLayer.burger);
  }, [skills, activeLayer]);

  // These two functions will become more complex,
  // receiving events with the exact part of the burger clicked.
  const clickBurger = lay => {
    setClickLayer(lay);
  };
  const hoverBurger = lay => {
    setHoverLayer(lay);
  };

  useEffect(() => {
    const layer = clickLayer ? clickLayer : hoverLayer;
    if (!layer) setActiveLayer(defaultSkills);
    else setActiveLayer(layer);
  }, [hoverLayer, clickLayer]);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__image">
                <div className="burger-wrapper"
                  onClick={() => clickBurger(frontEnd)}
                  onMouseEnter={() => hoverBurger(backEnd)}
                  onMouseLeave={() => hoverBurger(defaultSkills)}>
                  <BurgerImg alt={`image of ${burger}`} filename={burger} />
                </div>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            {activeLayer.title === 'None' && (
              <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
                <div className="skills-wrapper__info">
                  <h3 className="skills-wrapper__info-text">"Apps are like burgers. They've got layers." - Shrek <span className="small">(maybe)</span></h3>
                  <p className="skills-wrapper__info-text">
                    Select a layer on the burger to show stack skills.
                  </p>
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Front End' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  {frontEnd.stacks.map((skill, idx) => (<p key={idx}>{skill}</p>))}
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Back End' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  {backEnd.stacks.map((skill, idx) => (<p key={idx}>{skill}</p>))}
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Tools' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  {tools.stacks.map((skill, idx) => (<p key={idx}>{skill}</p>))}
                </div>
              </Fade>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
