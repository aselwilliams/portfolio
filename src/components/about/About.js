import React from 'react';
import './about.css';
import me from '../images/me.jpg';

function About() {
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'DOM', 'React.js', 'Hooks', 'Redux', 'Context API',  'GitHub', 'Git', 'Redux/toolkit', 'Redux persist', 'Bootstrap','Reactstrap', 'Material UI', 'Fetch', 'Axios', 'Netlify', 'NPM',' Framer Motion',' Firebase', 'REST API', 'JSON', 'Jest', 'JIRA',' Scrum', 'Agile']
  return (
    <div className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"/>
        </div>
      </div>
       
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
     Creative Front-End Developer with 1 year and 9 months of professional experience. I have a solid knowledge of JavaScript, React.js, HTML5, CSS3. Firm believer in mobile-first approach and modern CSS techniques. I like to take ownership of the product and be proactive in creating user-centered UI/UX. Eager to face new challenges in multi-tasking team. Technical stack:
     </p>
     <br/>
     <p className='a-desc'>
  {skills.map((el)=>(
      <button className='a-skill'>{el}</button>
  ))}
        </p>
        </div>

    </div>
  )
}

export default About