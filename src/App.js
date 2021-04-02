import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TeamsScreen from "./screens/TeamsScreen";
import PlayersScreen from "./screens/PlayersScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TeamsScreen />
          </Route>
          <Route exact path="/players/:id">
            <PlayersScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
