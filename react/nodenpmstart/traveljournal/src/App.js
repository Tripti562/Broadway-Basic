import logo from './logo.svg';
import './App.css';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Border from './Border';

function App() {
  return (
    <div>
    <Header status=" "></Header>
    <Main
      image="images/first.jpg"
      countryname="JAPAN"
      destinyname="Mount Fuji"
      duration="12 Jan, 2021 - 24 Jan, 2021"
      detail="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    ></Main>
    <Border></Border>
    <Main
      image="images/second.jpg"
      countryname="AUSTRALIA"
      destinyname="Sydney Opera House
    "
      duration="27 May, 2021 - 8 Jun, 2021"
      detail="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    ></Main>
    <Border></Border>
    <Main
      image="images/third.jpg"
      countryname="NORWAY"
      destinyname="Geirangerfjord"
      duration="01 Oct, 2021 - 18 Nov, 2021"
      detail="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    ></Main>
    <Header></Header>
  </div>
  );
}

export default App;
