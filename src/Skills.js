import Data from './data/skillData'; 
import {useState} from 'react';
import './styles/skill.css';
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
 export default function Skills(){
    const [expand,setExpand]=useState(null);
    return(
        <div className='skills'>
            <h1 className='majorTitle'>Skills</h1>
            {
                Data.map((skill)=>{
                    return(
                        <div className='skill' key={skill.id}>
                            <h2 className='title'>{skill.title}
                            {expand===skill.id?<AiFillMinusCircle onClick={()=>setExpand(null)} className='pm'/>:
                            <AiFillPlusCircle  onClick={()=>setExpand(skill.id)} className='pm'/>}</h2>
                            {expand===skill.id && <div><ul className='detail'><li>{skill.details}</li></ul></div>}
                        </div>
                    )
                })
            }
        </div>
    )
 }