import React from "react"; 
import {Outlet} from "react-router-dom";
import Navbar from "../navbar"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import photo from '../img/IMG_2126.jpeg';


library.add(faEnvelope );

const Layout = () => {  
    return (     
        <> 
            <header className="page-header">
                <img src={photo} className="img_profile img_circle"></img>
                <div>
                    <div className="page_hero">
                        <h1 className="page_title">Soraya Taraszka</h1>
                        <ul className="skills_buttons">
                            <li>Wordpress</li>
                            <li>PHP</li>
                            <li>React</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <a className="contact-email" href="mailto:sorayataraszka@gmail.com"> <FontAwesomeIcon icon="envelope" /><span>sorayataraszka@gmail.com</span></a>
                    <Navbar />
                </div>
            </header>
            <main>
                {/* <header className="page_hero">
                   
                </header> */}
                <Outlet />     
            </main>
        </>   
    ); 
}; export default Layout; 