import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurrencyConv from './Components/CurrencyConv';
import CurrencyExchangeRates from './Components/CurrencyExchangeRates';
import { CurrencyProvider } from './Components/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={CurrencyConv} exact />
            <Route path="/current-exchange-rates" component={CurrencyExchangeRates} />
          </Switch>
        </div>
      </BrowserRouter>

    </CurrencyProvider>


  );
}

export default App;
