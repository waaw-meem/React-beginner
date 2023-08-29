// 4. Create a component
import ProfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png"
import Cortana from "./Images/cortana.png"
import SiriImage from "./Images/siri.png"
import "bulma/css/bulma.css"
import "./ProfileCard.css"

function App(){
    return (
        <div className="parent_container">
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Primary hero
    </p>
    <p class="subtitle">
      Primary subtitle
    </p>
  </div>
</section>
<div className="container">
    <section className="section">
<div className="columns">
        <div className="column-4">
        <ProfileCard title='Wali' handle='WebHunt' image={AlexaImage} description='Artificial Intelligence, or AI, refers to the simulation of human intelligence in machines. '/>
        </div>
        <div className="column-4">
        <ProfileCard title='Owais' handle='WebHunt' image={Cortana} description='Renewable energy is derived from natural resources that are replenished at a sustainable rate, such as sunlight, wind, and water. '/>
        </div>
        <div className="column-4">
        <ProfileCard title='Anas' handle='IBA' image={SiriImage} description='Blockchain is a decentralized and secure digital ledger technology that records transactions across multiple computers. '/>
        </div>
      </div> 
      </section>
</div>
      </div>  

)
}

export default App;