import React,{useEffect} from "react";
import "./about.css";
import me from "../images/me.jpg";
import { motion,useAnimation } from "framer-motion";
import {blockAnimation, picAnimation} from '../animation';
import { useInView } from "react-intersection-observer";

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skills = [
    "JavaScript",
    "ES6",
    "React",
    "Redux",
    "Express",
    "Redux/toolkit",
    "Redux persist",
    "Context API",
    "Sequelize",
    "bit.io",
    "PostgreSQL",
    "AWS EC2",
    "GitHub",
    "Git",
    "TypeScript",
    "Rollbar",
    "Figma",
    "dbdesigner",
    "Bootstrap",
    "Reactstrap",
    "Material UI",
    "HTML5",
    "CSS3",
    "Fetch",
    "Axios",
    "Netlify",
    "NPM",
    "Framer Motion",
    "Firebase",
    "REST API",
    "Jest",
    "JIRA",
    " Scrum",
    "Agile",
  ];
  return (
    <div className="a" >
      <motion.div ref={ref} className="a-left" initial="hidden"
      variants={picAnimation}
      animate={controls} 
        >
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />
        </div>
      </motion.div>

      <motion.div ref={ref} className="a-right" variants={blockAnimation} animate={controls}>
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          {/* I have a solid knowledge of JavaScript, React.js, HTML5,
          CSS3. Firm believer in mobile-first approach and modern CSS
          techniques. I like to take ownership of the product and be proactive
          in creating user-centered UI/UX. Eager to face new challenges in
          multi-tasking team. Technical stack: */}
          Driven and self-motivated web developer with a keen eye for detail who loves to build life-enriching and meaningful solutions to make a positive impact on people's lives and businesses. 
          Innate problem-solver and critical thinker who is continuously looking to be challenged and learn new skills. Moreover, I am fluent in speaking four languages (English, Russian, Turkish and Kyrgyz).
          Technical stack:
        </p>
        <br />
        <p className="a-desc">
          {skills.map((el,ind) => (
            <motion.button drag dragConstraints={{top:-300,bottom:300,right:250, left:-300}} className="a-skill" key={ind}>{el}</motion.button>
          ))}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
