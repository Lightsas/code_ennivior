import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
      <MessengerCustomerChat
        pageId="1124328884368280"
        appId="301770884876366"
      />

    </div>
  );
}

export default App;
