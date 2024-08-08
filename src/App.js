import Apifetch from './Apifetch';
import './App.css';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
     <Apifetch/>
     <Footer/>
    </div>
  );
}

export default App;
