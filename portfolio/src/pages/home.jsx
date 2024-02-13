import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function page_home(){
    return(
        <>
            <h2 className="section_title">Who am I?</h2>
            <p>I am web developer based in the UK. I graduated Sheffield Hallam with MSc in Web Systems Design degree in 2016. Since then I mostly worked in agencies, I cut my teeth on PHP, majority through Wordpress, but also Drupal.</p>
            <p><strong>My career goal</strong> is to continue pursuing React / more Javascript based languages, whether alongside Wordpress or stand-alone.</p>
            <hr></hr>

            <h2 className="section_title">So what can I do?</h2>

            <ul className="list-text">
                <li>PHP (Object oriented. While themes don’t have to be Object Oriented they can be, like the ones I worked on! Drupal requires OOP)</li>
                <li>Sass</li>
                <li>Javascript ES6</li>
                <li>React</li>
                <li>Design mockups</li>
                <li>UX</li>
            </ul>
        </>
    )
}

export default page_home;