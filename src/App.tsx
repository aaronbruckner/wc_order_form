import './App.css';
import wcLogo from './images/wc_logo.webp';
import OrderForm from './pages/OrderForm';

function App() {
  return (
    <div className="App">
      <img src={wcLogo} alt="Wilson Combat Logo"/>
      <OrderForm/>
    </div>
  );
}

export default App;
