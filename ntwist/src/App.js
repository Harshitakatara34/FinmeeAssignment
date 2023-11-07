import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { HomePage } from './Components/HomePage';
import { MinetoMill } from './Components/MinetoMill';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
<HomePage />
<MinetoMill/>
<Footer />
    </div>
  );
}

export default App;
