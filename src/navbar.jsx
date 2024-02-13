import React from "react"; 
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom"; 
function Navbar() {   
    const location = useLocation();

    return (    
        <nav>       
            <ul>         
                <li>           
                    <Link to="/portfolio" className={ location.pathname == '/' ? 'active' : ''}>About me</Link>         
                </li>        
                
                <li>           
                    <Link to="/portfolio/projects" className={ location.pathname == '/projects' ? 'active' : ''}>Examples of my work</Link>        
                </li>           
            </ul>     
        </nav>   
    ); 
} export default Navbar; 