import './App.css';
import Header from "./components/header/header"
import About from './section/About/about';
import Contacts from './section/Contact/contact';
import Projects from './section/Projects/projects';

function App() {
  return (
    <div className="App">
<Header/>
<div id="profile"><About/></div>
<div id="projects"><Projects/></div>
<div id="contact"><Contacts/></div>
    </div>
  );
}

export default App;
