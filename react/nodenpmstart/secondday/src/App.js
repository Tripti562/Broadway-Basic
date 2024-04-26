import logo from './logo.svg';
import './App.css';
import Head from "./Head";
import Facts from "./Facts";
import Hero_Section from './HeroSection';
import OnlineEx from './OnlineEx';
import "bootstrap/dist/css/bootstrap.css"
// import "./images.second.png";
import "react-bootstrap"

function App() {
  return (
   <div>
    <Head></Head>
    <Hero_Section></Hero_Section>
    <OnlineEx></OnlineEx>
    <div className="container">
      <div className="row">
        <Facts
          img="./images/first.png"
          rating={5.0}
          totalreview={6}
          countryname="USA"
          name="Life lessons with Katie Zaferes"
          price={136}
          status="SOLD OUT"
        />
        <Facts
          img="./images/second.png"
          rating={5.0}
          totalreview={30}
          countryname="USA"
          name="Learn wedding photography
"
          price={125}
          status="ONLINE"
        />
        <Facts
          img="./images/third.png"
          rating={4.8}
          totalreview={2}
          countryname="USA"
          name="Group Mountain Biking"
          price={50}
          status=' '
        />
      </div>
    </div>
   </div>
  );
}

export default App;
