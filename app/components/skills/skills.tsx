import "./skills.css"
import css from '/public/css.png'
import python from '/public/python.png'
import git from '/public/gitIcon.png'
import html from '/public/html.png'
import java from '/public/java.png'
import javascript from '/public/javascript.png'
import mongoDB from '/public/mongoDB.png'
import figma from '/public/figma.png'
import php from '/public/php.png'
import postgres from '/public/postgres.png'
import react from '/public/react.png'
import next from '/public/next.png'

export default function Skills() {
return (
<div className="containerSkill">
    <h1 className="text-4xl">Habilidades</h1>
    <div className="cards">
        <div className="cardSkill js">
            <p>JavaScript</p>
            <img src={javascript.src} height={50} width={50} alt="" />
        </div>


        <div className="cardSkill java">
            <img src={java.src} height={50} width={50} alt="" />
         
            <p>Java</p>
        </div>


        <div className="cardSkill git">
          
            <img src={git.src} height={50} width={50} alt="" />
            <p>Git</p>
        </div>

        <div className="cardSkill python">
         
            <img className="pythonimg" src={python.src} height={50} width={50} alt="" />
            <p>Python</p>
        </div>


        <div className="cardSkill html">
        
            <img src={html.src} height={50} width={50} alt="" />
            <p>HTML5</p>
        </div>


        <div className="cardSkill css">
          
            <img className="cssimg" src={css.src} height={60} width={60} alt="" />
            <p>CSS3</p>
        </div>


        <div className="cardSkill mongoDB">
          
            <img src={mongoDB.src} height={50} width={110} alt="" />
            <p>MongoDB</p>
        </div>


        <div className="cardSkill postgresql">
           
            <img src={postgres.src} height={50} width={50} alt="" />
            <p>PostgreSQL</p>
        </div>


        <div className="cardSkill figma">
            
            <img src={figma.src} height={50} width={70} alt="" />
            <p>Figma</p>
        </div>


        <div className="cardSkill react">
           
            <img src={react.src} height={50} width={50} alt="" />
            <p>ReactJS</p>
        </div>


        <div className="cardSkill nextjs">
            
            <img src={next.src} height={50} width={50} alt="" />
            <p>NextJS</p>
        </div>


        <div className="cardSkill php">
          

            <img src={php.src} height={50} width={50} alt="" />
            <p>PHP</p>
        </div>

        

    </div>

</div>

)
}