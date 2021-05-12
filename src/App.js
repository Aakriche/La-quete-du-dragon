import Accueil from './pages/Accueil';
import Game from './pages/Game';
import Village from './pages/Village';
import MeuniereUn from './pages/meuniere/MeuniereUn';
import MeuniereDeux from './pages/meuniere/MeuniereDeux';
import MeuniereTrois from './pages/meuniere/MeuniereTrois';
import GrangeUn from './pages/grange/GrangeUn';
import GrangeDeux from './pages/grange/GrangeDeux';
import GrangeTrois from './pages/grange/GrangeTrois';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react'

function App() {

  
  const [redIndex, clickRedItem] = useState(0)
  const [blueIndex, clickBlueItem] = useState(0)
  const [greenIndex, clickGreenItem] = useState(0)
  const [yellowIndex, clickYellowItem] = useState(0)
  
  

  return (<main>
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/Game" render={(props) => (<Game {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex} 
        clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
        <Route path="/Village" render={(props) => (<Village {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
         clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
        <Route path="/MeuniereUn" render={(props) => (<MeuniereUn {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
          <Route path="/MeuniereDeux" render={(props) => (<MeuniereDeux {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
          <Route path="/MeuniereTrois" render={(props) => (<MeuniereTrois {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
          <Route path="/GrangeUn" render={(props) => (<GrangeUn {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
          <Route path="/GrangeDeux" render={(props) => (<GrangeDeux {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
          <Route path="/GrangeTrois" render={(props) => (<GrangeTrois {...props} redIndex={redIndex} greenIndex={greenIndex} blueIndex={blueIndex} yellowIndex={yellowIndex}
          clickRedItem={clickRedItem} clickBlueItem={clickBlueItem} clickGreenItem={clickGreenItem}clickYellowItem={clickYellowItem} /> )} />
        <Route path="/" component={() => <div>Erreur 404</div>} />
      </Switch>
    </Router>
    
    </main>
  );
}

export default App;
