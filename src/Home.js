import React from "react";
import { datadogLogs } from "@datadog/browser-logs";

const Home =()=>{
    const handleClick=()=>{
        datadogLogs.logger.info('Log from frontend', { button: 'myButton',id:'123455' });
    }
    return (
        <>
        <div class="container">
        <div class="nav-content">
          <div>
            <h2>GA4 Demo</h2>
          </div>
          <div >
            <ul class="nav-items">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="newsletter.html">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-content">
          <h1>Hello experionite!</h1>
          <p>Experion brings expertise in the latest technology while crafting exceptional product experiences, utilizing Data and AI, Cognitive Computing, DevSecOps, and Experience Design capabilities across domains.</p>
          <a class="exp-btn" target="_blank" href="https://experionglobal.com/">Take me to experion</a>
          <div class="newsletter">
            <h4>Subscibe to our newsletter</h4>
            <form id="home-newsletter-form">
              <input type="email" required />
            </form>
              <button onClick={handleClick}>Subscribe</button>
          </div>
        </div>
    </div>
        </>
    )
}

export default Home;