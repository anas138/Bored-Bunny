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
        <div className={"head-container"}>
          <ul className={"header-list"}>
            <li>HOME</li>
            <li>WHAT IS BORED BUNNY</li>
            <li>BENEFITS & UTILITIES</li>

          </ul>
          <div>
            <img src={"https://www.boredbunny.io/images/logo.png"} />
          </div>
          <ul className={"header-list"}>
            <li>ROADMAP</li>
            <li>THE TEAM</li>
            <li>FAQ’S</li>
            <button>Mint is Live</button>

          </ul>

        </div>

        <div className={"paragraph"} data-aos="fade-up" data-aos-duration="1000">
          <p>READY TO TAKE OVER THE METAVERSE AND THE NFT SPACE</p>
          <h3> JOIN BORED BUNNY</h3>
          <p>   Bored Bunny is your ticket into the largest and fastest growing NFT Project</p>
          <button>Mint is Live</button>
        </div>

      </div>


      <div className={"second-page"}>
        <div className={"secondPage-paragraph"} data-aos="fade-up" data-aos-duration="1000">
          <p>Welcome To The Exclusive Bored Bunny</p>
          <p>Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched</p>
          <p>utility!</p>
          <button>VIEW ALL COLLECTION</button>
        </div>
      </div>




      <div className="third-page">
        <div>
          <img src="https://www.boredbunny.io/images/img_round2.png"  data-aos="fade-right" data-aos-duration="1000" />
        </div>
        <div className="thirdPage-text" data-aos="fade-left" data-aos-duration="1000">
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


      <div className="fourth-Page" data-aos="zoom-in" data-aos-duration="1000">
        <div>
          <img src="https://www.boredbunny.io/images/img3.png" width="100%" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/img4.png" width="100%" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/mg5.png" width="100%" />
        </div>
        <div>
          <img src="https://www.boredbunny.io/images/img6.png" width="100%" />
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

        <div className="sixthPage-imageContainer" data-aos="zoom-in" data-aos-duration="1000">
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" />
          <img src="https://www.boredbunny.io/images/Legendary1.png" width="20%" height="100%" className="sixthPage-img" />
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
        <div className="eightPage-heading">
          <h3>JOIN THE COMMUNITY NOW</h3>
          <h4>
            TOGETHER WE GOING TO BUILD THE BEST COMMUNITY IN THE NFT SPACE, LET'S SHOW THE WORLD HOW INFLUENT AND ENGAGED WE ARE WE <br />
            ARE GOING TO TAKE OVER THE METAVERSE AND NFT SPACE
          </h4>
        </div>
        <div className="eightPage-second-container">
          <div className="eightPage-second-container-subHeading">
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
          <div>
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
