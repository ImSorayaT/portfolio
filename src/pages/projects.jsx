import React from "react";
import spotify_img from '../img/screenshot_spotify.png';
import calc_img from '../img/screenshot_calc.png';
import portfolio_img from '../img/screenshot_portfolio.png';
import spotify_player_img from '../img/Screenshot_spotifyPlayer.png';
import fod_img from '../img/screenshot_fod.png';



function page_projects(){
    return(
        <>
            <section className="showItems-list">
                <h2 className="section_title">Projects</h2>

                <article className="portfolio-item">
                    <img src={spotify_img} className=""></img>
                    <div className="portfolio-desc">
                        <h3>Spotify API</h3>
                        <p>This was my first step to a bigger project of making a themeable Spotify player. I wanted to try connecting to the Spotify API first. The search gives a list of albums based on the name of the artist searched for.</p>
                        <p><a className="btn-underline-bg" href="https://imsorayat.github.io/React---spotify-search/" target="_blank">See an example</a></p>
                    </div>
                </article>
                <article className="portfolio-item">
                    <img src={portfolio_img} className=""></img>
                    <div className="portfolio-desc">
                        <h3>This portfolio!</h3>
                        <p>I wanted to make a small brochure website showcasing my abilities. I specifically built it in React to do that.</p>
                        <p>I could have downloaded a CMS package such as headless WP, Sanity or Cosmic. I made the decision that since I am the only editing the pages it’s a better idea to save the space and make the pages load faster. I can absolutely see arguments for a CMS to future-proof the site.</p>
                    </div>
                </article>
                <article className="portfolio-item">
                    <img src={calc_img} className=""></img>
                    <div className="portfolio-desc">
                        <h3>Calculator</h3>
                        <p>An exercise I made when exploring React for the first time. I specifically challenged myself not to use any solutions or tutorials already available. It does basic arithmetic and percentages.</p>
                        <p><a className="btn-underline-bg" href="https://imsorayat.github.io/reactCalculator/" target="_blank">See an example</a></p>
                    </div>
                </article>

            </section>
            <section className="showItems-grid">
                <h2 className="section_title">Designs</h2>
                <div className="container">
                    <article className="portfolio-item">
                        <a href="https://www.figma.com/proto/8dFHo6FwkDmkUHgK97bC8D/Untitled?node-id=66-395&starting-point-node-id=66%3A395" target="_blank">
                            <img src={spotify_player_img} className=""></img>
                        </a>
                    </article>
                    <article className="portfolio-item">
                        <a href="https://www.figma.com/proto/zJIzvbpojxzv1vDzzIhooC/Untitled?node-id=65-225" target="_blank">
                            <img src={fod_img} className=""></img>
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
}

export default page_projects;