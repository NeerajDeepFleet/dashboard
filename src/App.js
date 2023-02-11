import ExchangeRate from "./components/ExchangeRate";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CryptoChart from "./components/CryptoChart";
import CurrencyDropdown from "./components/CurrencyDropdown";

function App() {
  return (
    <div >
      I am Hargobinda
      <ExchangeRate />
      <Portfolio />
      <Sidebar />
      <SearchBar />
      <CryptoChart />
      <CurrencyDropdown />

    </div>
  );
}

export default App;
