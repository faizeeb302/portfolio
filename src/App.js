import './App.css';
import Header from "./components/header/header"
import About from './section/About/about';

function App() {
  return (
    <div className="App">
<Header/>
<div id="profile"><About/></div>
<div id="projects"><About/></div>
<div id="contact"><About/></div>
    </div>
  );
}

export default App;
