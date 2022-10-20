import './styles/front.css';
 import {BsFillEmojiSmileFill} from 'react-icons/bs'
 export default function Front(){
    return(
        <div className='frontContainer'>
            <div className='nav'>
                <span><a href='#front'>Home</a></span>
                <span><a href='#skills'>Skill</a></span>
                <span><a href='#projects'>Projects</a></span>
                <span><a href='#contacts'>Contact</a></span>
            </div>
            <div className='front'>
            <div className='frontInfo'>
                <h3>Hello , I am Nuysanbar</h3>
                <h3>Full-stack Developer</h3>
                <p>I am skilled team player with strong experience in web development environments. Works well independently to handle assignments and always ready to go beyond basic assignments. Tbh I may not know how to declare variable, I am just superb at googling <BsFillEmojiSmileFill className='smileEmoji'/></p>
            </div>
            <div>
                <img src="./image/nuysanbar.jpg" alt="nuysanbar" className='frontImage'/>
            </div>
            </div>
            <div className='border'><div></div></div>
        </div>
       
    )
 }