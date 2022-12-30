import React, {useState} from "react";
import { projectList } from "../helpers/ProjectsList";
import {ColorPicker} from "./../components/ColorPicker";
import {Link, Outlet} from 'react-router-dom';
import './../styles/Portfolio.css';


const Portfolio = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleClick = (component: any) => {
        setSelectedComponent(component);
    }

    return (
        <div className="projects">
            <h1>Here are some components using React</h1>
            <br />
            <div className="projectList">
                {projectList.map((component) => {
                    return <article key={component.id} className="singleComp">
                        <h5>{component.name}</h5>
                        <Link to={`/components/${component.id}`}><button className="componentBtn">Try</button></Link>
                    </article>
                })}
            </div>

            <Outlet/>
        </div>
    )
}


export default Portfolio;