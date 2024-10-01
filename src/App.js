import Navbar from './components/Navbar';
import './App.css';
import { Router,Route,Switch } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Animatedcursor from './components/Animatedcursor';
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Chatbot />
      <Animatedcursor/>
    </div>
  );
}

export default App;
