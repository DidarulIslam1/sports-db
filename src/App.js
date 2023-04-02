import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
