
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer1 from './components/Footer1';
import Image1 from './components/Image1';
import Text1 from './components/Text1';
import Text2 from './components/Text2';
import Text3 from './components/Text3';
import Card from './components/Card';
// import Cardgrid from './components/Cardgrid';
import Cardfloat from './components/Cardfloat';
function App() {
  return (
    <Router>
    <NavBar/> 
    {/* <Card1/> */}
    <Card/>
    <Text1/>
    {/* <Drawing/> */}
    <Image1/>
    <Text2/>
    {/* <Cardgrid/> */}
    <Cardfloat/>
    <Text3/>
    <Footer1/>
    </Router>
  );
}

export default App;
