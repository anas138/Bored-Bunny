
import './App.css';

function App() {
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
               <img src={"https://www.boredbunny.io/images/logo.png"}/>
           </div>
           <ul className={"header-list"}>
               <li>ROADMAP</li>
               <li>THE TEAM</li>
               <li>FAQ’S</li>
               <button>Mint is Live</button>

           </ul>

       </div>

        <div className={"paragraph"}>
            <p>READY TO TAKE OVER THE METAVERSE AND THE NFT SPACE</p>
            <h3> JOIN BORED BUNNY</h3>
             <p>   Bored Bunny is your ticket into the largest and fastest growing NFT Project</p>
            <button>Mint is Live</button>
        </div>

      </div>


        <div className={"second-page"}>
            <div className={"paragraph"}>
                <p>Welcome To The Exclusive Bored Bunny</p>
                <p>Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched</p>
                <p>utility!</p>
                <button>VIEW ALL COLLECTION</button>
            </div>
        </div>

    </div>
  );
}

export default App;
