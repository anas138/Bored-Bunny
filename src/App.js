import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

      <div className={"first-page"}>
        <div className={"head-container"} >
          <ul className={"header-list"} id={"first-head-list"}>
            <a><li>HOME</li></a>
            <a><li>WHAT IS BORED BUNNY</li></a>
            <a><li>BENEFITS & UTILITIES</li></a>

          </ul>
          <div>
            <img src={"https://www.boredbunny.io/images/logo.png"} />
          </div>
          <ul className={"header-list"} id={"second-head-list"}>
            <li>ROADMAP</li>
            <li>THE TEAM</li>
            <li>FAQ’S</li>
            <button>Mint is Live</button>

          </ul>

        </div>

        <div className={"paragraph"} data-aos="fade-up" data-aos-duration="1500">
          <p>READY TO TAKE OVER THE METAVERSE AND THE NFT SPACE</p>
          <h3><span id="join">JOIN</span> <span id="bored">BORED</span> BUNNY</h3>
          <p>Bored Bunny is your ticket into the largest and fastest growing NFT Project</p>
          <button>Mint is Live</button>
        </div>

      </div>


      <div className={"second-page"}>
        <div className={"secondPage-paragraph"} data-aos="fade-up" data-aos-duration="1500">
          <p>Welcome To The Exclusive Bored Bunny</p>
          <p>Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched</p>
          <p>utility!</p>
          <button>VIEW ALL COLLECTION</button>
        </div>
      </div>




      <div className="third-page">
        <div>
          <img src="https://www.boredbunny.io/images/img_round2.png" data-aos="fade-right" data-aos-duration="1500" />
        </div>
        <div className="thirdPage-text" data-aos="fade-left" data-aos-duration="1500">
          <div className="thirdPage-text-heading0ne" >
            <h3>WHAT IS<br />
              BORED BUNNY?</h3>
          </div>
          <div className="thirdPage-text-headingtwo"  >
            <h3>Bored Bunny is a collection of 4,999 unique 3D well-<br />
              designed Bunnies united together to get on the Ethereum<br />
              Blockchain</h3>
          </div>
          <div className="thirdPage-text-headingtwo">
            <h3>Each Bored Bunny is unique and exclusive based on a<br />
              hundred traits.<br />
              The objective is to build the strongest community and<br />
              project around NFTs.</h3>
          </div>
          <div className="thirdPage-text-headingtwo">
            <h3>Entering into the Bored Bunny Community means joining a<br />
              family full of investors and nft enthusiasts who believe in the<br />
              future of Cryptocurrencies and the blockchain technology.</h3>
          </div>
          <div className="thirdPage-button">
            <button>JOIN OUR DISCORD</button>
          </div>
        </div>
      </div>


      <div className="fourth-Page" >
        <div>
          <img src="https://www.boredbunny.io/images/img3.png" width="100%" data-aos="zoom-in" data-aos-duration="1500" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/img4.png" width="100%" data-aos="zoom-in" data-aos-duration="1500" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/mg5.png" width="100%" data-aos="zoom-in" data-aos-duration="1500" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/img6.png" width="100%" data-aos="zoom-in" data-aos-duration="1500" />
        </div>
        <div className="fourthPage-heading">
          BORED BUNNY
        </div>
      </div>


      <div className="fifth-page">
        <div className="fifthPage-firstHeading">
          <h3 className="fifthPage-firstHeading-sub">BENEFITS & UTILITIES</h3>
          <h3>When you buy a Bored Bunny, you’re not simply buying a simple NFT, you are getting<br />
            access to a community where benefits and utilities will increase with the time.</h3>
        </div>
        <div className="fiftPage-img">
          <img src="https://www.boredbunny.io/images/img8.png" width="100%" />
          <div className="fifthPage-inner-firstHeading" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            <div className="fifthPage-inner-ineer-sub">
              <img src="	https://www.boredbunny.io/images/icon1.png" style={{ "margin": "5px" }} />
              <h3>
                INCREASE THE <br />
                VALUE OF YOUR NFT
              </h3>
            </div>
            <span>If you are lucky and mint one of our rare NFT <br />
              you can 2x, 5x, maybe even 10x the value of <br />
              your investment within a few days.</span>

          </div>


          <div className="fifthPage-inner-secondHeading" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            <div className="fifthPage-inner-second-sub">
              <img src="	https://www.boredbunny.io/images/icon2.png" style={{ "margin": "5px" }} />
              <h3>
                ACCESS TO<br />
                PRIVATE EVENTS
              </h3>
            </div>
            <span>A big party will be organised to reward all of <br />
              our holders and to celebrate the achievement <br />
              of our goals. Bali, LA, Dubai ? The community <br />
              choose.</span>

          </div>


          <div className="fifthPage-inner-thirdHeading" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            <div className="fifthPage-inner-third-sub">
              <img src="https://www.boredbunny.io/images/icon3.png" style={{ "margin": "5px" }} />
              <h3>
                OUR<br />
                METAVERSE
              </h3>
            </div>
            <span>They will be able to wear their 3D Bored <br />
              and join Bored Bunny City, a Private Land on <br />
              the Metaverse where only our community can <br />
              have access.</span>

          </div>


          <div className="fifthPage-inner-fourthHeading" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            <div className="fifthPage-inner-fourth-sub">
              <img src="https://www.boredbunny.io/images/icon4.png" style={{ "margin": "5px" }} />
              <h3>
                HOLDERS<br />
                REWARDS
              </h3>
            </div>
            <span>The holders will get access to our community <br />
              funds used to ​​invest, reward, and collaborate <br />
              with the best projects in the space and <br />
              projects ideas of our members</span>

          </div>



          <div className="fifthPage-inner-fifthhHeading" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            <div className="fifthPage-inner-fifth-sub">
              <img src="https://www.boredbunny.io/images/icon5.png" style={{ "margin": "5px" }} />
              <h3>
                BREED <br />
                YOUR NFT
              </h3>
            </div>
            <span>Bored Bunny owners can breed their Bunnies <br />
              to create a 2nd Generation Bunny. Just keep in <br />
              mind, you'll need a total of 2 Bored Bunny to <br />
              breed, so hop to it</span>

          </div>


          <div className="fifthPage-inner-sixthhhHeading">
            <img src="https://www.boredbunny.io/images/round_img_1.png" style={{ "margin": "5px" }} width="250px" height="250px" />
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 1000" className="sixth-svg">
            <title>Visit Site Link</title>
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="30s"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text dy="70" textLength="1220">
              <textPath href="#textcircle">GET YOUR BORED BUNNY</textPath>
            </text>
          </svg>
          </div>
          

        </div>
      </div>


      <div className="sixth-page">
        <div className="sixth-page-first-heading">
          <h3>OUR SPECIAL<br />
            LEGENDARY<br />
            COLLECTION
          </h3>
          <h4>DISCOVER OUR 10 LEGENDARY BORED BUNNY - THEY ARE THE RAREST</h4>
        </div>

        <div className="sixthPage-imageContainer" data-aos-duration="1500" data-aos-delay="100">
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100" />
        </div>
      </div>


      <div className="seventh-page">
        <div className="seventhPage-heading">
          <h3>ROAD MAP</h3>
          <h4>Our plans moving forward into 2022.</h4>
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/img23.png" />
        </div>
        <div className="seventhPage-bottomImage">
          <img src="https://www.boredbunny.io/images/img12.png" height="100%" width="100%" />
        </div>

      </div>
      <div className="eight-page">
        <div className="eightPage-heading" data-aos="fade-up" data-aos-duration="1500">
          <h3>JOIN THE COMMUNITY NOW</h3>
          <h4>
            TOGETHER WE GOING TO BUILD THE BEST COMMUNITY IN THE NFT SPACE, LET'S SHOW THE WORLD HOW INFLUENT AND ENGAGED WE ARE WE <br />
            ARE GOING TO TAKE OVER THE METAVERSE AND NFT SPACE
          </h4>
        </div>
        <div className="eightPage-second-container">
          <div className="eightPage-second-container-subHeading" data-aos="fade-right" data-aos-duration="1500">
            <h3>
              Together, let’s build the best exclusive<br />
              club never seen before. Show to <br />
              the world how strong and influent we are. <br />
              Let’s take over the Metaverse.
            </h3>
            <div>
              <button className="eightPage-second-container-dButton">JOIN OUR DISCORD</button>
              <button className="eightPage-second-container-FButton">FOLLOW US</button>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500">
            <img src="https://www.boredbunny.io/images/img16.png" />
          </div>
        </div>
      </div>

      <div className="final-page">
        <div className="finalPage-heading">
          <h3>
            FREQUENTLY<br />
            ASKED QUESTIONS
          </h3>
        </div>
      </div>

    </div>
  );
}

export default App;
