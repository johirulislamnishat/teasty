import "tailwindcss/tailwind.css"
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route>
            <Home></Home>
          </Route>

          <Route>

          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
