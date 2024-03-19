import React from "react";

const Home =()=>{
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
            <form action="welcome.html" id="home-newsletter-form">
              <input type="email" required />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
    </div>
        </>
    )
}

export default Home;