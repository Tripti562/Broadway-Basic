import logo from './logo.svg';
import './App.css';
import Head from "./Head";
import Facts from "./Facts";
import Hero_Section from './Hero_Section';
import OnlineEx from './OnlineEx';
import UserData from './Data';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const users =UserData.map(function(singleData){
    return(
        <Facts
          img={singleData.img}
          rating={singleData.rating}
          totalreview={singleData.totalreview}
          countryname={singleData.countryname}

          name={singleData.name}
          price={singleData.price}
          status={singleData.status}
        />
    );
  });
  return(
    <div>
      <Head></Head>
      <Hero_Section></Hero_Section>
      <OnlineEx></OnlineEx>
      <div className="container">
      <div className="row">
         {users}
      </div>
      </div>
    </div>
);     
}

export default App;
