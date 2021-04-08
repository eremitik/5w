import { Navbar } from './components/navbar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Mailing from './pages/Mailing.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /> 
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/about" render={() => <About />}/>
          <Route exact path="/contact" render={() => <Contact />}/>
          <Route exact path="/mailing" render={() => <Mailing />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
