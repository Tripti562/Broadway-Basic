import logo from './logo.svg';
import './App.css';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Package from './Package';
import Main from './Main';
import Border from './Border';

function App() {
  return (
    <div>
    <Header status=" "></Header>
    <Package/>
    <Header></Header>
  </div>
  );
}

export default App;
