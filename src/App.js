import Home from './pages/home';
import 'bulma/css/bulma.css'
import Addcrypto from './pages/addcrypto';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer';
import CurrencyProvider from './contexts/currencycontext';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <CurrencyProvider>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/add">
              <Addcrypto />
            </Route>
          </CurrencyProvider>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
