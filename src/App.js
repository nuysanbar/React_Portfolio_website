import { useState } from "react"
import Front from './Front.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contacts from './Contacts.js';
export default function App(){
    return(
        <main>
            <Front />
            <Skills />
            <Projects />
            <Contacts />
        </main>
    )
}