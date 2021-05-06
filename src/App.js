import Accueil from './pages/Accueil';
import Game from './pages/Game';
import Village from './pages/Village';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (<main>
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/Game" exact component={Game} />
        <Route path="/Village" exact component={Village} />
        <Route path="/" component={() => <div>Erreur 404</div>} />
      </Switch>
    </Router>
    
    </main>
  );
}

export default App;
