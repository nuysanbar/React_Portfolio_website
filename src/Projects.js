 import Data from './data/projectData';
import './styles/projects.css';
 export default function Projects(){
    return(
        <div className='skills' id='projects'>
            <h1 className='majorTitle'>Projects</h1>
            <div className='projectContainer'>
                {Data.map((data)=>{
                    return(
                        <div key={data.title} className='project'>
                            <img src={data.src} alt={data.title} />
                            <h2>{data.title}</h2>
                            <a href={data.link}>&lt; Code /&gt;</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
 }